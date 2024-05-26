import { useCallback, useContext } from 'react';

import { Box, Button, Flexbox, Separator } from 'src/components/atom';
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

import { SELECT_OPTIONS_QUERY } from '../../home/HomeMainScreen/content/ItemListContent';
import { getPageableContent } from 'src/utils/getPageableContent';

import { StackScreenProps } from '@react-navigation/stack';
import { MyInfoParamList } from '..';

import {
  StuffListItemData,
  STUFF_LIST_MOCK,
} from '../../home/SwitchDetailScreen/SwitchList.mock';
import { USERINFO_MOCK } from './UserInfo.mock';

const MyInfoMainScreen = ({
  navigation,
}: StackScreenProps<MyInfoParamList, 'MyInfoMain'>) => {
  const { userId } = useContext(UserContext);

  const {
    data: myInfoData,
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
      />
    );
  }, []);

  const flatListProps = useFlatList<ItemResponse>({
    type: 'grid',
    onEndReached: handleLoadMoreData,
    renderItem,
  });

  return (
    <ScreenWrapper>
      <Box>
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
        </Flexbox>
      </Box>
      <Separator />
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
