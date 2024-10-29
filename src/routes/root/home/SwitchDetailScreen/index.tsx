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
  const handleClickReport = () =>
    navigation.navigate('Report', {
      previousScreen: 'SwitchDetail',
    });
  const handleClickPropose = () => navigation.navigate('RegisteredList');
  // TODO : 🚨 모달 띄우기
  const handleClickRevoke = () =>
    Alert.alert('요청 취소', '요청이 취소됐습니다.');
  const handleClickNegotiate = () => navigation.navigate('ChatDetail');
  const handleClickDecline = () => {};
  const handleClickCheckoutPropose = () => Alert.alert('물품을 보겠습니다.');

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
          handleClickReport={handleClickReport}
          handleClickPropose={handleClickPropose}
          handleClickRevoke={handleClickRevoke}
          handleClickNegotiate={handleClickNegotiate}
          handleClickDecline={handleClickDecline}
          userSummaryData={USERSUMMARY_MOCK}
          offeredList={STUFF_LIST_MOCK}
          isMine={isMine}
        />
      </ScrollView>
      {isMine && (
        <Box
          position='absolute'
          bottom={10}
          pl={PADDING.wrapper.horizontal + 10}
          pr={PADDING.wrapper.horizontal + 10}
        >
          <Button
            type={'normal'}
            size={'medium'}
            onPress={handleClickCheckoutPropose}
            children={'제안 받은 물품 보기'}
          />
        </Box>
      )}
    </ScreenWrapper>
  );
};

export { SwitchDetailScreen };
