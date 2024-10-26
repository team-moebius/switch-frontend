import { useCallback, useContext } from 'react';
import { Alert, ScrollView } from 'react-native';

import { Box, Button, Flexbox, Typography } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { ScreenWrapper } from 'src/components/template';

import { SwitchDetailView } from './contents/SwitchDetailView';
import { SwitchDetailViewProps } from './contents/SwitchDetailView';

import { UserContext } from 'src/context/user';

import { HomeRouteParamList } from '..';
import { StackScreenProps } from '@react-navigation/stack';
import { USERINFO_MOCK } from '../../my-info/MyInfoMainScreen/UserInfo.mock';
import { SwitchDetailData, SWITCH_DETAIL_MOCK } from './SwitchList.mock';
import { convertLocalTime } from 'src/utils/convertLocalTime';

const SwitchDetailScreen = ({
  navigation,
}: StackScreenProps<HomeRouteParamList, 'SwitchDetail'>) => {
  const { userId } = useContext(UserContext);

  const FooterUI = useCallback(() => {
    // TODO : 🚨 이 아이템 등록자 달아야 됨
    if (userId === null) return undefined;
    if (userId !== '글쓴이') {
      // if (false) {
      // 스위치 제안을 하지 않았다면
      return (
        <Flexbox
          width={'100%'}
          alignItems={'center'}
          flexDirection={'column'}
          gap={10}
          pb={20}
        >
          <Box width={'90%'}>
            {/* TODO : 🚨 제안 여부에 따라 분기처리 */}
            {false ? (
              <Button
                type={'normal'}
                size={'medium'}
                onPress={() => navigation.navigate('RegisteredList')}
              >
                스위치 요청하기
              </Button>
            ) : (
              <Button
                type={'warning'}
                size={'medium'}
                onPress={() => Alert.alert('요청 취소', '요청이 취소됐습니다.')}
              >
                요청 취소하기
              </Button>
            )}
          </Box>
          <Flexbox width={'90%'} justifyContent='center'>
            <Typography fontSize={16}>3명이 줄서고 있어요</Typography>
          </Flexbox>
        </Flexbox>
      );
    } else if (userId === '글쓴이') {
      // } else if (true) {
      return (
        <Flexbox
          width={'100%'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'row'}
          gap={10}
          pb={20}
        >
          <Box width={'44%'}>
            <Button
              type={'normal'}
              size={'medium'}
              onPress={() => navigation.navigate('ChatDetail')}
            >
              협의
            </Button>
          </Box>
          <Box width={'44%'}>
            <Button
              type={'cancel'}
              size={'medium'}
              onPress={() => console.debug('스위치 거절')}
            >
              거절
            </Button>
          </Box>
        </Flexbox>
      );
    }
  }, [userId, navigation]);

  return (
    <ScreenWrapper>
      <ScrollView>
        <Flexbox width={'100%'} flexDirection={'column'}>
          <Flexbox.Item>
            <Separator width={'100%'} />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'} flex={1}>
            <SwitchDetailView
              onClickReport={() =>
                navigation.navigate('Report', {
                  previousScreen: 'SwitchDetail',
                })
              }
              userData={{
                score: USERINFO_MOCK.score as number,
                verified: true,
                switchCount: USERINFO_MOCK.switchCount as number,
                nickname: USERINFO_MOCK.nickname as string,
                introduction: USERINFO_MOCK.introduction as string,
              }}
              itemData={{
                ...SWITCH_DETAIL_MOCK,
                date: SWITCH_DETAIL_MOCK.date
                  ? convertLocalTime(SWITCH_DETAIL_MOCK.date?.toUTCString())
                  : '',
              }}
            />
          </Flexbox.Item>
          <Separator width={'100%'} />
          <FooterUI />
        </Flexbox>
      </ScrollView>
    </ScreenWrapper>
  );
};

export { SwitchDetailScreen };
