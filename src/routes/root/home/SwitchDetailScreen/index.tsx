import { useContext, useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';

import { Flexbox, Typography } from 'src/components/atom';
import { PressableIcon, ScreenHeader } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { SwitchDetailView } from './contents/SwitchDetailView';
import { SwitchDetailUser } from './contents/SwitchDetailUser';
import { SwitchDetailButton } from './contents/SwitchDetailButton';
import { MyItemOptionModal } from './modals/MyItemOptionModal';
import { DeleteItemModal } from './modals/DeleteItemModal';
import { RevokeModal } from './modals/RevokeModal';

import { UserContext } from 'src/context/user';
import { convertLocalTime } from 'src/utils/convertLocalTime';

import { useCommonMutation } from 'src/hooks/useCommonMutation';
import { useCommonQuery } from 'src/hooks/useCommonQuery';
import {
  BookmarkRequest,
  BookmarkResponse,
  ItemResponse,
  UserInfoResponse,
} from '@team-moebius/api-typescript';
import { BookMarkApi, ItemApi, UserApi } from 'src/api';
import { useQueryClient } from 'react-query';

import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeRouteParamList } from '..';
import { ChatRouteParamList } from '../../chat';

import { STUFF_LIST_MOCK, SWITCH_DETAIL_MOCK } from './SwitchList.mock';
import { USERSUMMARY_MOCK } from '../../my-info/MyInfoMainScreen/UserInfo.mock';
import { ErrorFallbackUI } from './contents/ErrorFallback';
import LoadingFallback from './contents/LoadingFallback';

const SwitchDetailScreen = ({
  navigation,
  route,
}: CompositeScreenProps<
  StackScreenProps<HomeRouteParamList, 'SwitchDetail'>,
  StackScreenProps<ChatRouteParamList, 'SwitchDetail'>
>) => {
  const { userId } = useContext(UserContext);
  // TODO : 🚨 내꺼면 헤더에 햄버거 버튼? 그 있ㅓ야 됨. 게시글 수정&삭제 보여주는
  const switchDetailData = route.params;
  const isMine = userId ? switchDetailData.userId === +userId : false;

  // states
  const [modalState, setModalState] = useState<
    'revoke' | 'delete' | 'user' | undefined
  >(undefined);

  // apis
  const {
    data: userInfo,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useCommonQuery<UserInfoResponse, Parameters<typeof UserApi.getUserInfo>>({
    api: UserApi.getUserInfo,
    queryKey: ['switchDetail_userApi_getUserInfo', switchDetailData.userId],
    onSuccess(data) {
      console.debug('\n\n✅ switchDetail_userApi_getUserInfo ✅\n', data);
    },
    onError(err) {
      console.debug('\n\n🚨 switchDetail_userApi_getUserInfo 🚨\n', err);
    },
  });
  const {
    data: itemInfo,
    isLoading: isItemLoading,
    isError: isItemError,
  } = useCommonQuery<ItemResponse, Parameters<typeof ItemApi.getItem>>({
    api: ItemApi.getItem,
    queryKey: ['switchDetail_itemApi_getItem', switchDetailData.id],
    onSuccess(data) {
      console.debug('\n\n✅ switchDetail_itemApi_getItem ✅\n', data);
    },
    onError(err) {
      console.debug('\n\n🚨 switchDetail_itemApi_getItem 🚨\n', err);
    },
  });

  const queryClient = useQueryClient();
  const { mutate: createBookMark } = useCommonMutation<
    BookmarkResponse,
    BookmarkRequest
  >({
    api: ({ userId, itemId }: { userId: number; itemId: number }) =>
      BookMarkApi.createBookmark({ userId, itemId }),
    onSuccess(data, variables) {
      console.debug(
        '\n\n\n ✅ SwitchDetail_bookMarkApi_createBookmark data ✅ \n\n',
        data,
        variables
      );
      queryClient.invalidateQueries([
        'switchDetail_itemApi_getItem',
        switchDetailData.id,
      ]);
    },
    onError(error, variables) {
      console.debug(
        '\n\n\n 🚨 SwitchDetail_bookMarkApi_createBookmark error 🚨 \n\n',
        error,
        variables
      );
    },
  });

  // handlers
  const onPressReport = () =>
    navigation.navigate('Report', {
      previousScreen: 'SwitchDetail',
      itemTitle: itemInfo?.name,
      opponentName: userInfo?.nickname ?? '',
    });
  const onPressPropose = () => navigation.navigate('RegisteredList');
  const onPressRevoke = () => {
    setModalState('revoke');
  };
  const onPressRevokeConfirm = () => {
    setModalState(undefined);
  };
  const onPresssRevokeModalBack = () => {
    setModalState(undefined);
  };
  const onPressSwitchInProgress = () => {
    navigation.navigate('ChatMain', {
      api: 'SwitchInProgress',
    });
  };
  const onConfirmDeleteItem = () => {
    // TODO : 삭제 api 호출
    setModalState(undefined);
  };
  const onPressEditButton = () => {
    setModalState(undefined);
    navigation.navigate('EditItem', {
      screen: 'RegisterForm',
      // TODO : 내 아이템이라면 편집을 할 수 있고, 초깃값을 전달해줘야 한다. 아니면
      // 그냥 아이템 id만 넘겨서 그 아이템 데이터를 조회해 와서 넘기든지
      params: { initialData: undefined },
    });
  };
  const onPressDeleteButton = () => {
    setModalState(undefined);
    setModalState('delete');
    console.log('check');
  };

  useEffect(() => {
    navigation.setOptions({
      header: (props) => {
        if (isMine) {
          return (
            <ScreenHeader
              {...props}
              right={
                <Flexbox width={'85%'} justifyContent={'flex-end'}>
                  <PressableIcon
                    size={24}
                    name={'menu'}
                    onPress={() => setModalState('user')}
                  />
                </Flexbox>
              }
            />
          );
        } else {
          <ScreenHeader {...props} />;
        }
      },
    });
  }, []);

  return (
    <ScreenWrapper>
      {isItemLoading || isUserLoading ? (
        <LoadingFallback />
      ) : isItemError || isUserError ? (
        <ErrorFallbackUI navigation={navigation} />
      ) : (
        <>
          <ScrollView>
            <SwitchDetailView
              itemData={{
                images: itemInfo?.images ?? [''],
                description: itemInfo?.description ?? '',
                preferredCategory: itemInfo?.preferredCategory ?? '',
                preferredLocations: itemInfo?.preferredLocations ?? new Set(),
                category: itemInfo?.category ?? '',
                name: itemInfo?.name ?? '',
                bookmark: itemInfo?.bookmark ?? false,
                date: convertLocalTime(
                  itemInfo?.updatedAt
                    ? new Date(itemInfo?.updatedAt as string).toUTCString()
                    : new Date().toUTCString()
                ),
              }}
              isMine={isMine}
              onPressBookMark={() =>
                createBookMark({
                  userId: +(userId as string),
                  itemId: switchDetailData.id as number,
                })
              }
            />
            <SwitchDetailUser
              onPressReport={onPressReport}
              userSummaryData={{
                score: userInfo?.score ?? 0,
                verified: true,
                switchCount: userInfo?.switchCount ?? 0,
                nickname: userInfo?.nickname ?? 'undefined',
                introduction: userInfo?.introduction ?? 'undefined',
              }}
              isMine={isMine}
            />
          </ScrollView>
          <SwitchDetailButton
            onPressPropose={onPressPropose}
            onPressRevoke={onPressRevoke}
            onPressSwitchInProgress={onPressSwitchInProgress}
            isMine={isMine}
          />
          <RevokeModal
            onPressRevoke={onPressRevokeConfirm}
            onPressBack={onPresssRevokeModalBack}
            visible={modalState === 'revoke'}
            myItem={itemInfo?.name ?? ''}
            oppItem={userInfo?.nickname ?? ''}
          />
          <MyItemOptionModal
            visible={modalState === 'user'}
            onPressBack={() => setModalState(undefined)}
            onPressEditButton={onPressEditButton}
            onPressDeleteModal={onPressDeleteButton}
          />
          <DeleteItemModal
            visible={modalState === 'delete'}
            onPressBack={() => setModalState(undefined)}
            onDeleteConfirm={onConfirmDeleteItem}
          />
        </>
      )}
    </ScreenWrapper>
  );
};

export { SwitchDetailScreen };
