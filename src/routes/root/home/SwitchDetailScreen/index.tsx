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
  // TODO : main에서 내려오는 item 보고 해당 item의 id를 이용해서 개별 item 조회 api 호출해야 될지도 모름
  const [revokeModalVisible, setRevokeModalVisible] = useState(false);
  const [myItemModalVisible, setMyItemModalVisible] = useState(false);
  const { userId } = useContext(UserContext);
  // TODO : 🚨 내꺼면 헤더에 햄버거 버튼? 그 있ㅓ야 됨. 게시글 수정&삭제 보여주는
  const switchDetailData = route.params;
  const isMine = userId ? switchDetailData.userId === +userId : false;
  // const isMine = true;
  // console.log('params 입니다 ::: ', route.params, userId);

  const {
    data: userInfo,
    isLoading: isUserInfoLoading,
    isSuccess: isUserInfoSuccess,
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

  // TODO : 🚨 아이템 api 받아서 이 아이템이 내 아이템인지 확인하는 반응형 변수 만들기
  // TODO : 🚨 북마크 api 달아야 됨
  const onPressReport = () =>
    navigation.navigate('Report', {
      previousScreen: 'SwitchDetail',
      // TODO : 상대 아이템 이름 전달해야 됨
      itemTitle: '상대 아이템 이름',
      // TODO : 상대 이름 전달해야 됨
      opponentName: '상대 닉네임',
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
            ...SWITCH_DETAIL_MOCK,
            date: SWITCH_DETAIL_MOCK.date
              ? convertLocalTime(SWITCH_DETAIL_MOCK.date?.toUTCString())
              : '',
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
        myItem={'제 아이템인데요...'} // TODO : 🚨 myItem, oppItem에 변수채워두기 및 prop명 데이터와 맞추기
        oppItem={'상대 아이템인데요....'}
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
