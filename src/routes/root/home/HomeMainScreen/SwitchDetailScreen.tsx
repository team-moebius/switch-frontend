import React from 'react';
import { Box, Button, Flexbox, Typography, Image } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { ItemCard, UserSummary } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { USERINFO_MOCK } from '../../my-info/MyInfoMainScreen/UserInfo.mock';
import { SWITCH_DETAIL_MOCK } from './SwitchList.mock';
import Swiper from 'react-native-swiper';
import { Pressable } from 'react-native';

const SwitchDetailScreen = () => {
  return (
    <ScreenWrapper>
      <Flexbox
        height={'100%'}
        width={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        pt={50}
      >
        <Flexbox.Item width={'100%'} height={'30%'}>
          <Swiper>
            {SWITCH_DETAIL_MOCK.images?.map((src, index) => (
              <Box key={index} width={'100%'} height={'100%'}>
                <Image
                  src={src}
                  width={'100%'}
                  height={'100%'}
                  resizeMode='cover'
                />
              </Box>
            ))}
          </Swiper>
        </Flexbox.Item>
        <Flexbox.Item width={'90%'} pt={20}>
          <ItemCard
            data={{
              title: SWITCH_DETAIL_MOCK.title,
              date: SWITCH_DETAIL_MOCK.date,
              desc: SWITCH_DETAIL_MOCK.desc,
              wantedItem: SWITCH_DETAIL_MOCK.wantedItem,
              location: SWITCH_DETAIL_MOCK.location,
              hashTags: SWITCH_DETAIL_MOCK.hashTags,
              liked: SWITCH_DETAIL_MOCK.liked,
            }}
          />
        </Flexbox.Item>
        <Separator />
        <Flexbox.Item width={'100%'}>
          <Flexbox alignItems='center' justifyContent='center'>
            <Pressable onPress={() => window.alert('신고하기')}>
              <Typography fontSize={20} color={'#F1952B'}>
                신고하기
              </Typography>
            </Pressable>
          </Flexbox>
        </Flexbox.Item>
        <Separator />
        <Flexbox width={'90%'}>
          <UserSummary
            data={{
              user: USERINFO_MOCK.userName,
              verified: USERINFO_MOCK.verified,
              countSwitch: USERINFO_MOCK.switchCount,
              userRate: USERINFO_MOCK.userRate,
            }}
          />
        </Flexbox>
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
              onPress={() => window.alert('스위치 제안하기')}
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
    </ScreenWrapper>
  );
};

export { SwitchDetailScreen };
