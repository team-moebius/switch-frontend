import { useCallback, useContext, useMemo, useRef } from 'react';
import { Animated, useWindowDimensions } from 'react-native';

import { Box, Button, Flexbox, Typography } from 'src/components/atom';
import { UserSummary } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { ListView } from 'src/components/template/ListView';
import { ItemListCard } from './content/ItemListCard';

import { useFlatList } from 'src/hooks/useFlatList';
import { useCommonQuery } from 'src/hooks/useCommonQuery';
import { UserContext } from 'src/context/user';
import { useCommonInfiniteQuery } from 'src/hooks/useCommonInfiniteQuery';

import { ItemApi, UserApi } from 'src/api';
import {
  ItemResponse,
  SliceItemResponse,
  UserInfoResponse,
} from '@team-moebius/api-typescript';

import { StackScreenProps } from '@react-navigation/stack';
import { MyInfoParamList } from '..';

import { SELECT_OPTIONS_QUERY } from '../../home/HomeMainScreen/content/ItemListContent';
import { getPageableContent } from 'src/utils/getPageableContent';
import {
  StuffListItemData,
  STUFF_LIST_MOCK,
} from '../../home/SwitchDetailScreen/SwitchList.mock';
import { USERINFO_MOCK } from './UserInfo.mock';

const MyInfoMainScreen = ({
  navigation,
  route,
}: StackScreenProps<MyInfoParamList, 'MyInfoMain'>) => {
  const { userId } = useContext(UserContext);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const screenWidth = useWindowDimensions().width;
  const { otherUserId } = route.params;

  const {
    data: myInfoData,
    isLoading,
    isSuccess,
  } = useCommonQuery<UserInfoResponse, Parameters<typeof UserApi.getUserInfo>>({
    api: UserApi.getUserInfo,
    queryKey: ['myInfoMain_userApi_getUserInfo', otherUserId || userId],
    onSuccess(data) {
      console.debug('\n\n✅ myInfoMain_userApi_getUserInfo ✅\n', data);
    },
    onError(err) {
      console.debug('\n\n🚨 myInfoMain_userApi_getUserInfo 🚨\n', err);
    },
  });

  const {
    fetchNextPage,
    data: myItemData,
    isFetchingNextPage,
  } = useCommonInfiniteQuery<SliceItemResponse>({
    api: (param) =>
      ItemApi.getItemsByLoginUser(param.page, param.size, param.sort),
    queryString: { size: 20, sort: SELECT_OPTIONS_QUERY['최신순'] },
    queryKey: [
      'myInfoMain_ItemApi_getItemsByLoginUser',
      SELECT_OPTIONS_QUERY['최신순'],
    ],
    getNextPageParam(page) {
      let nextPageNumber: number | undefined;
      if (page.pageable && !page.last) {
        nextPageNumber = (page.pageable.pageNumber as number) + 1;
      } else {
        nextPageNumber = undefined;
      }

      return nextPageNumber;
    },
    onSuccess(data) {
      console.debug(
        '\n\n ✅ myInfoMain_ItemApi_getItemsByLoginUser ✅\n\n',
        data
      );
    },
    onError(error) {
      console.debug(
        '\n\n 🚨 myInfoMain_ItemApi_getItemsByLoginUser 🚨\n\n',
        error
      );
    },
  });

  const handleLoadMoreData = () => {
    if (!isFetchingNextPage) return;
    fetchNextPage();
  };

  const renderItem = useCallback(({ item }: { item: ItemResponse }) => {
    return (
      <ItemListCard
        title={item.name ?? ''}
        count={item.waitingCount}
        imageSrc={item.images ? item.images[0] : ''}
        status={item.status}
      />
    );
  }, []);

  const flatListProps = useFlatList<ItemResponse>({
    type: 'grid',
    onEndReached: handleLoadMoreData,
    renderItem,
  });

  const handleButtonPress = (toValue: number) => {
    Animated.timing(slideAnim, {
      toValue: toValue * (screenWidth / 2),
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = useMemo(
    () => ({
      transform: [
        {
          translateX: slideAnim,
        },
      ],
    }),
    [slideAnim]
  );

  return (
    <ScreenWrapper>
      <Box pl={15} pr={15}>
        <UserSummary
          data={{
            user: myInfoData?.nickname ?? (userId as string),
            verified: !!myInfoData?.phone,
            countSwitch: myInfoData?.switchCount ?? 0,
            userRate: myInfoData?.score ?? 0,
            bio: myInfoData?.introduction,
          }}
        />
        <Flexbox justifyContent='center' alignItems='center' mt={10} mb={10}>
          {Number(myInfoData?.id) === Number(userId) ? (
            <Box width={200}>
              <Button
                type={'normal'}
                size={'medium'}
                onPress={function (): void {
                  navigation.navigate('MyInfoEdit', { userInfo: myInfoData });
                }}
              >
                내 정보 편집하기
              </Button>
            </Box>
          ) : null}
        </Flexbox>
      </Box>
      <Box mt={15}>
        <Flexbox flexDirection='row'>
          <Flexbox width={'50%'} justifyContent='center'>
            <Button
              type={'transparent'}
              size={'medium'}
              onPress={() => handleButtonPress(0)}
            >
              <Typography fontSize={17}>대기중</Typography>
            </Button>
          </Flexbox>
          <Flexbox width={'50%'} justifyContent='center'>
            <Button
              type={'transparent'}
              size={'medium'}
              onPress={() => handleButtonPress(1)}
            >
              <Typography fontSize={17}>완료</Typography>
            </Button>
          </Flexbox>
        </Flexbox>
        <Animated.View
          style={[
            {
              height: 1,
              width: '50%',
              backgroundColor: '#3489eb',
            },
            animatedStyle,
          ]}
        />
      </Box>
      {/* <Separator /> */}
      <Flexbox height={'100%'}>
        <ListView<ItemResponse>
          {...flatListProps}
          data={getPageableContent(myItemData)}
          // data={STUFF_LIST_MOCK}
        />
      </Flexbox>
    </ScreenWrapper>
  );
};

export { MyInfoMainScreen };
