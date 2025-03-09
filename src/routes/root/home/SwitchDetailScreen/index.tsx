import { useContext, useEffect, useRef, useState } from 'react';
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
  const switchDetailData = route.params;
  const isMine = userId ? switchDetailData.userId === +userId : false;

  // states
  const [isRevokeModalOpen, setIsRevokeModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const conditionInModalHide = useRef({
    isOpenDeleteModal: false,
    isOpenEditScreen: false,
  });

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
    api: BookMarkApi.createBookmark,
    onError(error, variables, context) {
      console.debug(
        '\n\n\n 🚨 SwitchDetail_bookMarkApi_createBookmark error 🚨 \n\n',
        error,
        variables
      );
      queryClient.setQueryData(['todos'], context);
    },
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ['switchDetail_itemApi_getItem', switchDetailData.id],
      });
    },
    onMutate() {
      queryClient.cancelQueries({
        queryKey: ['switchDetail_itemApi_getItem', switchDetailData.id],
      });
      const prevItem = queryClient.getQueryData([
        'switchDetail_itemApi_getItem',
        switchDetailData.id,
      ]) as ItemResponse;
      queryClient.setQueryData(
        ['switchDetail_itemApi_getItem', switchDetailData.id],
        { ...prevItem, bookmark: true }
      );
      return prevItem;
    },
    onSuccess(data, variables) {
      console.debug(
        '\n\n\n ✅ SwitchDetail_bookMarkApi_createBookmark data ✅ \n\n',
        data,
        variables
      );
    },
  });
  const { mutate: deleteBookMarkMutate } = useCommonMutation<void, number>({
    api: BookMarkApi.deleteBookmark,
    onError(error, variables, context) {
      console.debug(
        '\n\n\n 🚨 SwitchDetail_bookMarkApi_deleteBookmark error 🚨 \n\n',
        error,
        variables
      );
      queryClient.setQueryData(['todos'], context);
    },
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ['switchDetail_itemApi_getItem', switchDetailData.id],
      });
    },
    onMutate() {
      queryClient.cancelQueries({
        queryKey: ['switchDetail_itemApi_getItem', switchDetailData.id],
      });
      const prevItem = queryClient.getQueryData([
        'switchDetail_itemApi_getItem',
        switchDetailData.id,
      ]) as ItemResponse;
      queryClient.setQueryData(
        ['switchDetail_itemApi_getItem', switchDetailData.id],
        { ...prevItem, bookmark: false }
      );
      return prevItem;
    },
    onSuccess(data, variables) {
      console.debug(
        '\n\n\n ✅ SwitchDetail_bookMarkApi_deleteBookmark data ✅ \n\n',
        data,
        variables
      );
    },
  });
  const { mutate: deleteItemMutate } = useCommonMutation<string, number>({
    api: ItemApi.deleteItem,
    onSuccess(data, variables) {
      console.debug(
        '\n\n\n ✅ SwitchDetail_itemApi_deleteItem data ✅ \n\n',
        data,
        variables
      );
      queryClient.invalidateQueries(['homeMain_itemApi_getAllItems']);
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
    setIsRevokeModalOpen(true);
  };
  const onPressRevokeConfirm = () => {
    setIsRevokeModalOpen(false);
    Alert.alert('요청 취소 api가 호출되어야 합니다.');
    // TODO : 요청 취소 api 호출하기
  };
  const onPresssRevokeModalBack = () => {
    setIsRevokeModalOpen(false);
  };
  const onPressSwitchInProgress = () => {
    navigation.navigate('ChatMain', {
      api: 'SwitchInProgress',
    });
  };
  const onConfirmDeleteItem = () => {
    setIsDeleteModalOpen(false);
    deleteItemMutate(itemInfo?.id as number);
    navigation.goBack();
  };
  const onPressEditButton = () => {
    setIsUserModalOpen(false);
    conditionInModalHide.current.isOpenEditScreen = true;
  };
  const onPressDeleteButton = () => {
    setIsUserModalOpen(false);
    conditionInModalHide.current.isOpenDeleteModal = true;
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
                    onPress={() => setIsUserModalOpen(true)}
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
              onPressBookMark={() => {
                if (itemInfo?.bookmark) {
                  if (itemInfo.bookmark) {
                    deleteBookMarkMutate(switchDetailData.id as number);
                  } else {
                    createBookMark({
                      itemId: switchDetailData.id as number,
                    });
                  }
                  // itemInfo.bookmark = !itemInfo.bookmark;
                }
              }}
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
            visible={isRevokeModalOpen}
            myItem={itemInfo?.name ?? ''}
            oppItem={userInfo?.nickname ?? ''}
          />
          <MyItemOptionModal
            visible={isUserModalOpen}
            onPressBack={() => setIsUserModalOpen(false)}
            onPressEditButton={onPressEditButton}
            onPressDeleteModal={onPressDeleteButton}
            onModalHide={() => {
              if (conditionInModalHide.current.isOpenDeleteModal) {
                setIsDeleteModalOpen(true);
                conditionInModalHide.current.isOpenDeleteModal = false;
              } else if (conditionInModalHide.current.isOpenEditScreen) {
                conditionInModalHide.current.isOpenEditScreen = false;
                navigation.navigate('EditItem', {
                  screen: 'RegisterForm',
                  // TODO : 내 아이템이라면 편집을 할 수 있고, 초깃값을 전달해줘야 한다. 아니면
                  // 그냥 아이템 id만 넘겨서 그 아이템 데이터를 조회해 와서 넘기든지
                  params: { initialData: undefined },
                });
              }
            }}
          />
          <DeleteItemModal
            visible={isDeleteModalOpen}
            onPressBack={() => setIsDeleteModalOpen(false)}
            onDeleteConfirm={onConfirmDeleteItem}
          />
        </>
      )}
    </ScreenWrapper>
  );
};

export { SwitchDetailScreen };
