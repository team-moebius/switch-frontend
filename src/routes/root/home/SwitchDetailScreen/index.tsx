import { useCallback, useContext } from 'react';
import { ScrollView } from 'react-native';

import { Box, Button, Flexbox } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { ScreenWrapper } from 'src/components/template';

import { SwitchDetailView } from './contents/SwitchDetailView';
import { SwitchDetailViewProps } from './contents/SwitchDetailView';

import { UserContext } from 'src/context/user';

import { HomeRouteParamList } from '..';
import { StackScreenProps } from '@react-navigation/stack';
import {
  UserInfoData,
  USERINFO_MOCK,
} from '../../my-info/MyInfoMainScreen/UserInfo.mock';
import { SwitchDetailData, SWITCH_DETAIL_MOCK } from './SwitchList.mock';

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

const SwitchDetailScreen = ({
  navigation,
}: StackScreenProps<HomeRouteParamList, 'SwitchDetail'>) => {
  const { userId } = useContext(UserContext);

  const FooterUI = useCallback(() => {
    // TODO : 🚨 이 아이템 등록자 달아야 됨
    if (userId === null) return undefined;
    if (userId !== '글쓴이') {
      if (false) {
        // 스위치 제안을 하지 않았다면
        return (
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
        );
      } else {
        return (
          <Flexbox
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
          </Flexbox>
        );
      }
    } else if (userId === '글쓴이') {
      return (
        <Flexbox
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
              userData={userDataResolver(USERINFO_MOCK)}
              itemData={itemDataResolver(SWITCH_DETAIL_MOCK)}
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
