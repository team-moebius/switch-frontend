import { useCallback, useContext } from 'react';

import { Box, Button, Flexbox, Separator } from 'src/components/atom';
import { UserSummary } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { ListView } from 'src/components/template/ListView';
import { ItemListCard } from './content/ItemListCard';

import { useFlatList } from 'src/hooks/useFlatList';
import { useCommonQuery } from 'src/hooks/useCommonQuery';
import { USER_ID, expoSecureStore } from 'src/common/secureStore';

import { UserApi } from 'src/api';
import {
  ItemResponse,
  UserInfoItem,
  UserInfoResponse,
} from '@team-moebius/api-typescript';

import {
  StuffListItemData,
  STUFF_LIST_MOCK,
  MOCK_MYINFO_ITEM,
} from '../../home/HomeMainScreen/SwitchList.mock';
import { USERINFO_MOCK } from './UserInfo.mock';
import { UserContext } from 'src/context/user';

const MyInfoMainScreen = ({ navigation }) => {
  const { userId } = useContext(UserContext);

  const { data, isLoading, isSuccess } = useCommonQuery<
    UserInfoResponse,
    Parameters<typeof UserApi.getUserInfo>
  >({
    api: UserApi.getUserInfo,
    queryKey: ['myInfoMain_userApi_getUserInfo', userId],
    onSuccess(data) {
      console.debug('\n\n✅ myInfoMain_userApi_getUserInfo ✅\n', data);
    },
    onError(err) {
      console.debug('\n\n🚨 myInfoMain_userApi_getUserInfo 🚨\n', err);
    },
  });

  const loadMoreData = useCallback(() => {
    console.debug('reacted end');
  }, []);

  const renderItem = useCallback(({ item }: { item: ItemResponse }) => {
    return (
      <ItemListCard
        title={item.name ?? ''}
        count={item.waitingCount}
        // imageSrc={item.thumbnail}
        imageSrc={item.images ? item.images[0] : ''}
      />
    );
  }, []);

  const flatListProps = useFlatList<ItemResponse>({
    type: 'grid',
    onEndReached: loadMoreData,
    renderItem,
  });

  return (
    <ScreenWrapper>
      <Box>
        <UserSummary
          data={{
            user: data?.nickname ?? (userId as string),
            verified: !!data?.phone,
            countSwitch: data?.switchCount ?? 0,
            userRate: data?.score ?? 0,
            bio: data?.introduction,
          }}
        />
        <Flexbox justifyContent='center' alignItems='center' mt={10} mb={10}>
          <Box width={200}>
            <Button
              type={'normal'}
              size={'medium'}
              onPress={function (): void {
                navigation.navigate('MyInfoEdit', { userInfo: data });
              }}
            >
              내 정보 편집하기
            </Button>
          </Box>
        </Flexbox>
      </Box>
      <Separator />
      <Flexbox height={'100%'}>
        <ListView<ItemResponse> {...flatListProps} data={STUFF_LIST_MOCK} />
      </Flexbox>
    </ScreenWrapper>
  );
};

export { MyInfoMainScreen };
