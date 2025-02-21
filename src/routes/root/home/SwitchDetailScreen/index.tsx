import { useContext, useState } from 'react';
import { Alert, ScrollView } from 'react-native';

import { ScreenWrapper } from 'src/components/template';
import { SwitchDetailView } from './contents/SwitchDetailView';
import { SwitchDetailFooter } from './contents/SwitchDetailFooter';

import { UserContext } from 'src/context/user';
import { convertLocalTime } from 'src/utils/convertLocalTime';

import { HomeRouteParamList } from '..';
import { StackScreenProps } from '@react-navigation/stack';

import { STUFF_LIST_MOCK, SWITCH_DETAIL_MOCK } from './SwitchList.mock';
import { USERSUMMARY_MOCK } from '../../my-info/MyInfoMainScreen/UserInfo.mock';
import { RevokeModal } from './contents/RevokeModal';
import { MyItemOptionModal } from '../modals';

const SwitchDetailScreen = ({
  navigation,
  route,
}: StackScreenProps<HomeRouteParamList, 'SwitchDetail'>) => {
  const [revokeModalVisible, setRevokeModalVisible] = useState(false);
  const [myItemModalVisible, setMyItemModalVisible] = useState(false);
  const { userId } = useContext(UserContext);
  // TODO : 🚨 내꺼면 헤더에 햄버거 버튼? 그 있ㅓ야 됨. 게시글 수정&삭제 보여주는
  // const isMine = userId === '물품id';
  const isMine = false;
  // console.log('params 입니다 ::: ', route.params, userId);
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
        />
        <SwitchDetailFooter
          onPressReport={onPressReport}
          onPressPropose={onPressPropose}
          onPressRevoke={onPressRevoke}
          userSummaryData={USERSUMMARY_MOCK}
          onPressCurrentSwitch={() => {
            Alert.alert('chatMain 페이지로 가야 됨');
          }}
          isMine={isMine}
        />
      </ScrollView>
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
