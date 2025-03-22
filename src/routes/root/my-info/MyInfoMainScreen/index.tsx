import { useCallback, useContext, useMemo, useRef, useState } from 'react';
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
  ItemResponseStatusEnum,
  SliceItemResponse,
  UserInfoResponse,
} from '@team-moebius/api-typescript';

import { StackScreenProps } from '@react-navigation/stack';
import { MyInfoParamList } from '..';

import {
  GridItem,
  SELECT_OPTIONS_QUERY,
} from '../../home/HomeMainScreen/content/ItemListContent';
import { getPageableContent } from 'src/utils/getPageableContent';
import {
  StuffListItemData,
  STUFF_LIST_MOCK,
} from '../../home/SwitchDetailScreen/SwitchList.mock';
import { USERINFO_MOCK } from './UserInfo.mock';
import { plusMockOne } from 'src/utils/plusMockOne';
import { PADDING } from 'src/assets/theme/base';
import { ThemeContext } from 'src/context/theme';

const MyInfoMainScreen = ({
  navigation,
}: StackScreenProps<MyInfoParamList, 'MyInfoMain'>) => {
  const { userId } = useContext(UserContext);
  const { color } = useContext(ThemeContext);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const screenWidth = useWindowDimensions().width;
  // const otherUserId = route.params?.otherUserId;

  const [isStandy, setIsStandy] =
    useState<ItemResponseStatusEnum>('IN_PROGRESS');

  const {
    data: userData,
    isLoading,
    isSuccess,
  } = useCommonQuery<UserInfoResponse, Parameters<typeof UserApi.getUserInfo>>({
    api: UserApi.getUserInfo,
    queryKey: ['myInfoMain_userApi_getUserInfo', userId],
    onSuccess(data) {
      console.debug('\n\n✅ myInfoMain_userApi_getUserInfo ✅\n', data);
    },
    onError(err) {
      console.debug('\n\n🚨 myInfoMain_userApi_getUserInfo 🚨\n', err);
    },
  });

  const {
    fetchNextPage,
    data: itemData,
    isFetchingNextPage,
  } = useCommonInfiniteQuery<SliceItemResponse>({
    api: (param) =>
      ItemApi.getItemsByLoginUser(isStandy, param.page, param.size, param.sort),
    queryString: { size: 20, sort: SELECT_OPTIONS_QUERY['최신순'] },
    queryKey: [
      `myInfoMain_ItemApi_getItemByLoginUser_${isStandy}`,
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
        `\n\n ✅ myInfoMain_ItemApi_getItemByLoginUser_${isStandy} ✅\n\n`,
        data
      );
    },
    onError(error) {
      console.debug(
        `\n\n 🚨 myInfoMain_ItemApi_getItemByLoginUser_${isStandy} 🚨\n\n`,
        error
      );
    },
  });

  const memoItemData = useMemo(() => getPageableContent(itemData), [itemData]);

  const handleLoadMoreData = () => {
    if (!isFetchingNextPage) return;
    fetchNextPage();
  };

  const renderItem = useCallback(({ item }: { item: ItemResponse }) => {
    return <GridItem item={item} />;
  }, []);

  const flatListProps = useFlatList<ItemResponse>({
    type: 'grid',
    onEndReached: handleLoadMoreData,
    renderItem,
  });

  const handleButtonPress = (isStandy: ItemResponseStatusEnum) => {
    if (isStandy === 'IN_PROGRESS') {
      setIsStandy('IN_PROGRESS');
    } else {
      setIsStandy('DONE');
    }
    Animated.timing(slideAnim, {
      toValue:
        isStandy === 'IN_PROGRESS'
          ? 0 * (screenWidth / 2)
          : 1 * (screenWidth / 2),
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
      <Box pl={PADDING.wrapper.horizontal} pr={PADDING.wrapper.horizontal}>
        <UserSummary
          data={{
            nickname: userData?.nickname ?? (userId as string),
            verified: !!userData?.phone,
            switchCount: userData?.switchCount ?? 0,
            score: userData?.score ?? 0,
            introduction: userData?.introduction,
          }}
        />
        <Flexbox justifyContent='center' alignItems='center' mt={10} mb={10}>
          {Number(userData?.id) === Number(userId) ? (
            <Box width={200}>
              <Button
                type={'normal'}
                size={'medium'}
                onPress={function (): void {
                  navigation.navigate('MyInfoEdit', { userInfo: userData });
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
              onPress={() => handleButtonPress('IN_PROGRESS')}
            >
              <Typography fontSize={17}>대기중</Typography>
            </Button>
          </Flexbox>
          <Flexbox width={'50%'} justifyContent='center'>
            <Button
              type={'transparent'}
              size={'medium'}
              onPress={() => handleButtonPress('DONE')}
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
              backgroundColor: color.primary[200],
            },
            animatedStyle,
          ]}
        />
      </Box>
      {/* <Separator /> */}
      <Flexbox
        height={'100%'}
        pl={PADDING.wrapper.horizontal}
        pr={PADDING.wrapper.horizontal}
      >
        <ListView<ItemResponse>
          {...flatListProps}
          data={
            memoItemData.length % 2 !== 0
              ? plusMockOne(memoItemData)
              : memoItemData
          }
          // data={STUFF_LIST_MOCK}
        />
      </Flexbox>
    </ScreenWrapper>
  );
};

export { MyInfoMainScreen };
