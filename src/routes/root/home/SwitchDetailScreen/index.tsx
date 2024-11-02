import { useContext } from 'react';
import { Alert, ScrollView, View } from 'react-native';

import { ScreenWrapper } from 'src/components/template';

import { SwitchDetailView } from './contents/SwitchDetailView';
import { SwitchDetailFooter } from './contents/SwitchDetailFooter';

import { HomeRouteParamList } from '..';
import { StackScreenProps } from '@react-navigation/stack';
import { UserContext } from 'src/context/user';

import { convertLocalTime } from 'src/utils/convertLocalTime';

import { STUFF_LIST_MOCK, SWITCH_DETAIL_MOCK } from './SwitchList.mock';
import { USERSUMMARY_MOCK } from '../../my-info/MyInfoMainScreen/UserInfo.mock';
import { PADDING } from 'src/assets/theme/base';
import { Box, Button } from 'src/components/atom';

const SwitchDetailScreen = ({
  navigation,
}: StackScreenProps<HomeRouteParamList, 'SwitchDetail'>) => {
  const { userId } = useContext(UserContext);
  // TODO : 🚨 아이템 api 받아서 이 아이템이 내 아이템인지 확인하는 반응형 변수 만들기
  // const isMine = userId === '물품id';
  const isMine = true;
  const onPressReport = () =>
    navigation.navigate('Report', {
      previousScreen: 'SwitchDetail',
    });
  const onPressPropose = () => navigation.navigate('RegisteredList');
  // TODO : 🚨 모달 띄우기
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
      </ScrollView>
    </ScreenWrapper>
  );
};

export { SwitchDetailScreen };
