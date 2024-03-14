import { Box, Button, Flexbox } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { ScreenWrapper } from 'src/components/template';
import {
  UserInfoData,
  USERINFO_MOCK,
} from '../../my-info/MyInfoMainScreen/UserInfo.mock';
import { SwitchDetailData, SWITCH_DETAIL_MOCK } from './SwitchList.mock';
import { SwitchDetailView } from './content/SwitchDetailView';
import { SwitchDetailViewProps } from './content/SwitchDetailView';
import { ScrollView } from 'react-native';

const userDataResolver = ({
  userName,
  verified,
  switchCount,
  userRate,
  introduce,
}: UserInfoData): SwitchDetailViewProps['userData'] => {
  return {
    user: userName,
    verified: verified,
    countSwitch: switchCount,
    userRate: userRate,
    bio: introduce,
  };
};

const itemDataResolver = ({
  title,
  date = '',
  desc,
  images,
  // wantedItem,
  location,
  hashTags,
}: // liked,
SwitchDetailData): SwitchDetailViewProps['itemData'] => {
  return {
    title: title,
    description: desc,
    date: new Date(date),
    thumbnails: images || [],
    location: location,
    hashTags: hashTags || [],
    categories: [],
    oppositeCategories: [],
  };
};

const SwitchDetailScreen = ({ navigation }) => {
  // 스위치 제안이 안 온 경우 최상위 Flexbox의 pt={0}

  return (
    <ScreenWrapper>
      <ScrollView>
        <Flexbox pt={120} width={'100%'} flexDirection={'column'}>
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
              userData={userDataResolver(USERINFO_MOCK)}
              itemData={itemDataResolver(SWITCH_DETAIL_MOCK)}
            />
          </Flexbox.Item>
          <Separator width={'100%'} />
          <Flexbox
            width={'100%'}
            alignItems={'center'}
            flexDirection={'column'}
            gap={10}
          >
            <Box width={'90%'}>
              <Button
                type={'normal'}
                size={'medium'}
                onPress={() => navigation.navigate('RegisteredList')}
              >
                스위치 제안하기
              </Button>
            </Box>
            <Box width={'90%'}>
              <Button
                type={'transparent'}
                size={'medium'}
                onPress={() => window.alert('몇명이 줄서고 있어요')}
              >
                3명이 줄서고 있어요
              </Button>
            </Box>
          </Flexbox>
          {/*내가 스위치 제안 중인 경우 아래 버튼이 보이게 됩니다 */}
          {/* <Flexbox
            width={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'row'}
            gap={10}
          >
            <Box width={'44%'}>
              <Button
                type={'normal'}
                size={'medium'}
                onPress={() => window.alert('스위치 제안 중')}
              >
                스위치 제안 중
              </Button>
            </Box>
            <Box width={'44%'}>
              <Button
                type={'cancel'}
                size={'medium'}
                onPress={() => navigation.navigate('HomeMain')}
              >
                제안 취소
              </Button>
            </Box>
          </Flexbox> */}
          {/*내가 스위치 제안 받은 경우 아래 버튼이 보이게 됩니다 */}
          {/* <Flexbox
            width={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'row'}
            gap={10}
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
          </Flexbox> */}
        </Flexbox>
      </ScrollView>
    </ScreenWrapper>
  );
};

export { SwitchDetailScreen };
