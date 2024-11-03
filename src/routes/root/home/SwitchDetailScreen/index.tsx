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

const SwitchDetailScreen = ({
  navigation,
  route,
}: StackScreenProps<HomeRouteParamList, 'SwitchDetail'>) => {
  const [revokeModalVisible, setRevokeModalVisible] = useState(false);
  const { userId } = useContext(UserContext);
  // const isMine = userId === '물품id';
  const isMine = false;
  // console.log('params 입니다 ::: ', route.params, userId);
  // TODO : 🚨 아이템 api 받아서 이 아이템이 내 아이템인지 확인하는 반응형 변수 만들기
  // TODO : 🚨 북마크 api 달아야 됨
  const onPressReport = () =>
    navigation.navigate('Report', {
      previousScreen: 'SwitchDetail',
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
          offeredList={STUFF_LIST_MOCK}
          isMine={isMine}
        />
        <RevokeModal
          onPressRevoke={onPressRevokeConfirm}
          onPressBack={onPresssRevokeModalBack}
          visible={revokeModalVisible}
          myItem={'제 아이템인데요...'} // TODO : 🚨 myItem, oppItem에 변수채워두기 및 prop명 데이터와 맞추기
          oppItem={'상대 아이템인데요....'}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export { SwitchDetailScreen };
