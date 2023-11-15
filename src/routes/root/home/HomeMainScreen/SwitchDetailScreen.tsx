import React from 'react';
import { Box, Button, Flexbox } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';

import { ScreenWrapper } from 'src/components/template';
import {
  UserInfoData,
  USERINFO_MOCK,
} from '../../my-info/MyInfoMainScreen/UserInfo.mock';
import { SwitchDetailData, SWITCH_DETAIL_MOCK } from './SwitchList.mock';
import { SwitchDetailView } from '../../register/SwitchDetail';
import { SwitchDetailViewProps } from '../../register/SwitchDetail/View';
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
  return (
    <ScreenWrapper>
      <ScrollView>
        <Flexbox width={'100%'} flexDirection={'column'}>
          <Flexbox.Item width={'100%'} flex={1}>
            <SwitchDetailView
              onClickReport={() => navigation.navigate('Report')}
              userData={userDataResolver(USERINFO_MOCK)}
              itemData={itemDataResolver(SWITCH_DETAIL_MOCK)}
            />
          </Flexbox.Item>
          <Separator />
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
        </Flexbox>
      </ScrollView>
    </ScreenWrapper>
  );
};

export { SwitchDetailScreen };
