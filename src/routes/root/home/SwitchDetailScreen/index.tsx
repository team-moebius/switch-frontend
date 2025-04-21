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
import { BookMarkApi, ItemAPI, SwitchAPI, UserAPI } from 'src/api';
import { useQueryClient } from 'react-query';

import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeRouteParamList } from '..';
import { ChatRouteParamList } from '../../chat';

import { STUFF_LIST_MOCK, SWITCH_DETAIL_MOCK } from './SwitchList.mock';
import { USERSUMMARY_MOCK } from '../../my-info/MyInfoMainScreen/UserInfo.mock';
import { ErrorFallbackUI } from './contents/ErrorFallback';
import LoadingFallback from './contents/LoadingFallback';
import { RegisterDto } from '../../register/RegisterFormScreen';
// import { RegisterDto } from '../../register/RegisterFormScreen';

const SwitchDetailScreen = ({
  navigation,
  route,
}: CompositeScreenProps<
  StackScreenProps<HomeRouteParamList, 'SwitchDetail'>,
  StackScreenProps<ChatRouteParamList, 'SwitchDetail'>
>) => {
  const { userId } = useContext(UserContext);
  const itemInfoFromRouteParams = route.params;
  const isMine = userId ? itemInfoFromRouteParams.userId === +userId : false;

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
  } = useCommonQuery<UserInfoResponse, Parameters<typeof UserAPI.getUserInfo>>({
    api: UserAPI.getUserInfo,
    queryKey: [
      'switchDetail_UserAPI_getUserInfo',
      itemInfoFromRouteParams.userId,
    ],
    onSuccess(data) {
      console.debug('\n\n✅ switchDetail_UserAPI_getUserInfo ✅\n', data);
    },
    onError(err) {
      console.debug('\n\n🚨 switchDetail_UserAPI_getUserInfo 🚨\n', err);
    },
  });
  const {
    data: itemInfo,
    isLoading: isItemLoading,
    isError: isItemError,
  } = useCommonQuery<ItemResponse, Parameters<typeof ItemAPI.getItem>>({
    api: ItemAPI.getItem,
    queryKey: ['switchDetail_itemApi_getItem', itemInfoFromRouteParams.id],
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
        queryKey: ['switchDetail_itemApi_getItem', itemInfoFromRouteParams.id],
      });
    },
    onMutate() {
      queryClient.cancelQueries({
        queryKey: ['switchDetail_itemApi_getItem', itemInfoFromRouteParams.id],
      });
      const prevItem = queryClient.getQueryData([
        'switchDetail_itemApi_getItem',
        itemInfoFromRouteParams.id,
      ]) as ItemResponse;
      queryClient.setQueryData(
        ['switchDetail_itemApi_getItem', itemInfoFromRouteParams.id],
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
        queryKey: ['switchDetail_itemApi_getItem', itemInfoFromRouteParams.id],
      });
    },
    onMutate() {
      queryClient.cancelQueries({
        queryKey: ['switchDetail_itemApi_getItem', itemInfoFromRouteParams.id],
      });
      const prevItem = queryClient.getQueryData([
        'switchDetail_itemApi_getItem',
        itemInfoFromRouteParams.id,
      ]) as ItemResponse;
      queryClient.setQueryData(
        ['switchDetail_itemApi_getItem', itemInfoFromRouteParams.id],
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
    api: ItemAPI.deleteItem,
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
  const { mutate: revokeSwitch } = useCommonMutation<any, number>({
    api: SwitchAPI.deleteSwitch,
    onSuccess(data, variables) {
      console.debug(
        '\n\n\n ✅ SwitchDetail_SwitchAPI_deleteSwitch data ✅ \n\n',
        data,
        variables
      );
      queryClient.invalidateQueries([
        'switchDetail_itemApi_getItem',
        itemInfoFromRouteParams.id,
      ]);
    },
    onError(error, variables) {
      console.debug(
        '\n\n\n 🚨 SwitchDetail_SwitchAPI_deleteSwitch error 🚨 \n\n',
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
  const onPressPropose = () =>
    navigation.navigate('RegisteredList', {
      pairedImage: itemInfo?.images ? itemInfo.images[0] : undefined,
      pairedItemId: itemInfo?.id,
      pairedName: itemInfo?.name,
      pairedUserId: itemInfo?.userId,
    });
  const onPressRevoke = () => {
    setIsRevokeModalOpen(true);
  };
  const onPressRevokeConfirm = () => {
    setIsRevokeModalOpen(false);
    if (itemInfo && itemInfo.switchId) revokeSwitch(itemInfo.switchId);
  };
  const onPresssRevokeModalBack = () => {
    setIsRevokeModalOpen(false);
  };
  const onPressSwitchInProgress = () => {
    navigation.navigate('ChatMain', {
      itemId: itemInfoFromRouteParams.id,
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
          <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
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
                if (itemInfo?.bookmark !== undefined) {
                  if (itemInfo.bookmark) {
                    deleteBookMarkMutate(itemInfoFromRouteParams.id as number);
                  } else {
                    createBookMark({
                      itemId: itemInfoFromRouteParams.id as number,
                    });
                  }
                  // itemInfo.bookmark = !itemInfo.bookmark;
                }
              }}
            />
            {!isMine && (
              <SwitchDetailUser
                onPressReport={onPressReport}
                userSummaryData={{
                  score: userInfo?.score ?? 0,
                  verified: userInfo?.phone ? true : false,
                  switchCount: userInfo?.switchCount ?? 0,
                  nickname: userInfo?.nickname ?? 'undefined',
                  introduction: userInfo?.introduction ?? 'undefined',
                }}
              />
            )}
          </ScrollView>
          {!isMine && (
            <SwitchDetailButton
              onPressPropose={onPressPropose}
              onPressRevoke={onPressRevoke}
              isSuggested={itemInfo?.isSuggested ?? false}
            />
          )}
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
                navigation.navigate('RegisterForm', {
                  initialData: itemInfo
                    ? ({
                        name: itemInfo.name,
                        description: itemInfo.description,
                        images: itemInfo.images,
                        category: itemInfo.category,
                        preferredCategory: itemInfo.preferredCategory,
                        preferredLocations: itemInfo.preferredLocations,
                      } as unknown as RegisterDto)
                    : undefined,
                  itemId: itemInfoFromRouteParams.id,
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
