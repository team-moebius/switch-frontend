import { useContext, useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';

import { ScreenWrapper } from 'src/components/template';
import { SwitchDetailView } from './contents/SwitchDetailView';
import { SwitchDetailUser } from './contents/SwitchDetailUser';
import { RevokeModal } from './contents/RevokeModal';
import { MyItemOptionModal } from '../modals';
import { SwitchDetailButton } from './contents/SwitchDetailButton';

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
import { PressableIcon, ScreenHeader } from 'src/components/molecule';
import { Flexbox } from 'src/components/atom';

const SwitchDetailScreen = ({
  navigation,
  route,
}: CompositeScreenProps<
  StackScreenProps<HomeRouteParamList, 'SwitchDetail'>,
  StackScreenProps<ChatRouteParamList, 'SwitchDetail'>
>) => {
  const [revokeModalVisible, setRevokeModalVisible] = useState(false);
  const [myItemModalVisible, setMyItemModalVisible] = useState(false);
  const { userId } = useContext(UserContext);
  // TODO : 🚨 내꺼면 헤더에 햄버거 버튼? 그 있ㅓ야 됨. 게시글 수정&삭제 보여주는
  const switchDetailData = route.params;
  const isMine = userId ? switchDetailData.userId === +userId : false;

  const { data: userInfo } = useCommonQuery<
    UserInfoResponse,
    Parameters<typeof UserApi.getUserInfo>
  >({
    api: UserApi.getUserInfo,
    queryKey: ['switchDetail_userApi_getUserInfo', switchDetailData.userId],
    onSuccess(data) {
      console.debug('\n\n✅ switchDetail_userApi_getUserInfo ✅\n', data);
    },
    onError(err) {
      console.debug('\n\n🚨 switchDetail_userApi_getUserInfo 🚨\n', err);
    },
  });
  const { data: itemInfo } = useCommonQuery<
    ItemResponse,
    Parameters<typeof ItemApi.getItem>
  >({
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
        'SwitchDetail_bookMarkApi_createBookmark',
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

  const onPressReport = () =>
    navigation.navigate('Report', {
      previousScreen: 'SwitchDetail',
      itemTitle: itemInfo?.name,
      opponentName: userInfo?.nickname ?? '',
    });
  const onPressPropose = () => navigation.navigate('RegisteredList');
  const onPressRevoke = () => {
    Alert.alert('스위치 취소 모달 실행!');
    setRevokeModalVisible(true);
  };
  const onPressRevokeConfirm = () => {
    Alert.alert('요청 성공!');
    setRevokeModalVisible(false);
  };
  const onPresssRevokeModalBack = () => {
    setRevokeModalVisible(false);
  };

  const onPressSwitchInProgress = () => {
    navigation.navigate('ChatMain', {
      api: 'SwitchInProgress',
    });
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
                    onPress={() => setMyItemModalVisible((prev) => !prev)}
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
                ? new Date(itemInfo?.updatedAt).toUTCString()
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
        visible={revokeModalVisible}
        myItem={itemInfo?.name ?? ''}
        oppItem={userInfo?.nickname ?? ''}
      />
      <MyItemOptionModal
        navigation={navigation}
        visible={myItemModalVisible}
        onPressBack={() => setMyItemModalVisible(false)}
        onEdit={() => {
          setMyItemModalVisible(false);
          navigation.navigate('EditItem', {
            screen: 'RegisterForm',
            // TODO : 내 아이템이라면 편집을 할 수 있고, 초깃값을 전달해줘야 한다. 아니면
            // 그냥 아이템 id만 넘겨서 그 아이템 데이터를 조회해 와서 넘기든지
            params: { initialData: undefined },
          });
        }}
        onDeleteModalControl={() => setMyItemModalVisible(false)}
      />
    </ScreenWrapper>
  );
};

export { SwitchDetailScreen };
