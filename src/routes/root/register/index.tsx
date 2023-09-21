import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { Pressable } from 'react-native';
import {
  Box,
  Flexbox,
  Icon,
  Typography,
  Image,
  TextInput,
  Button,
} from 'src/components/atom';
import { TagProps } from 'src/components/atom/Tag';
import {
  CountingTextarea,
  HashTagInput,
  TagInput,
} from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { HASHTAGS_MOCK, INPUT_TAG_MOCK } from './Tags.mock';
import { ScrollView } from 'react-native-gesture-handler';
import { Separator } from 'src/components/atom/Separator';

const Stack = createStackNavigator();

const RegisterMain = () => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [tagValue, setTagValue] = useState<string>('');
  const [hashTagValue, setHashTagValue] = useState<string>('');
  const [showMoreHashTag, setShowMoreHashTag] = useState<boolean>(false);

  const slicedHashTags = HASHTAGS_MOCK.slice(0, 3);

  const showMoreHashTagHandler = () => {
    setShowMoreHashTag((prev) => !prev);
  };

  const onTitleHandler = (title: string) => {
    setTitle(title);
  };

  const onDescHandler = (desc: string) => {
    setDesc(desc);
  };

  const onTagValueHandler = (tagValue: string) => {
    setTagValue(tagValue);
  };

  const onHashTagValueHandler = (hashTagValue: string) => {
    setHashTagValue(hashTagValue);
  };

  return (
    <ScreenWrapper>
      <Flexbox
        pt={50}
        height={'100%'}
        width={'100%'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ScrollView>
          <Flexbox width={'100%'} height={'15%'} alignItems='center' gap={10}>
            <Flexbox width={'auto'}>
              <Pressable onPress={() => alert('clicked')}>
                <Box
                  position={'relative'}
                  width={70}
                  height={70}
                  backgroundColor={'#cdcaca'}
                >
                  <Box
                    position={'absolute'}
                    width={'auto'}
                    top={'20%'}
                    left={'33.5%'}
                  >
                    <Icon name={'camera'} size={24} />
                  </Box>
                  <Box
                    position={'absolute'}
                    width={'auto'}
                    bottom={'20%'}
                    left={'35%'}
                  >
                    <Typography fontSize={14}>{'5/5'}</Typography>
                  </Box>
                </Box>
              </Pressable>
            </Flexbox>
            <Flexbox
              height={'100%'}
              width={'auto'}
              justifyContent={'center'}
              alignItems='center'
              gap={10}
            >
              <ScrollView horizontal>
                <Box position={'relative'} width={70} height={70}>
                  <Image
                    src={
                      'https://www.gameple.co.kr/news/photo/201802/140160_146061_4645.png'
                    }
                    width={'100%'}
                    height={'100%'}
                  />
                  <Box position={'absolute'} width={'auto'} top={0} left={50}>
                    <Pressable onPress={() => window.alert('삭제')}>
                      <Icon size={20} name={'close'} />
                    </Pressable>
                  </Box>
                </Box>
              </ScrollView>
            </Flexbox>
          </Flexbox>
          <Flexbox.Item width={'100%'}>
            <Separator />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <TextInput
              name={'title'}
              onChangeText={onTitleHandler}
              value={title}
              placeholder={'물품명'}
              width={'100%'}
              style={{ borderWidth: 0 }}
            />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Separator />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <CountingTextarea
              value={desc}
              placeholder={'물품에 대한 설명이나 스토리를 작성해주세요.'}
              onChange={onDescHandler}
              maxLength={200}
              border={'0 solid #979797'}
            />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Separator />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <TagInput
              tags={INPUT_TAG_MOCK}
              width={'100%'}
              name={'tagInput'}
              onChangeText={onTagValueHandler}
              placeholder={'스위치를 희망하는 물품이나 종류를 작성해주세요.'}
              value={tagValue}
            />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Separator />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <HashTagInput
              value={hashTagValue}
              width={'100%'}
              itemsWrap={'wrap'}
              name={'tagInput'}
              placeholder={'물품에 대한 해시태그를 작성해주세요.(선택사항)'}
              disabled={false}
              onChangeText={onHashTagValueHandler}
              hashTags={
                showMoreHashTag
                  ? (HASHTAGS_MOCK as unknown as TagProps[])
                  : (slicedHashTags as unknown as TagProps[])
              }
              functionalElement={
                <Flexbox
                  flexDirection={'column'}
                  justifyContent={'space-between'}
                  height={'auto'}
                  gap={5}
                >
                  <Typography color={'black'} fontSize={14}>
                    {HASHTAGS_MOCK.length + '/30'}
                  </Typography>
                  <Button
                    type={'normal'}
                    size={'small'}
                    onPress={showMoreHashTagHandler}
                    wide={false}
                  >
                    <Typography fontSize={14}>더보기</Typography>
                  </Button>
                </Flexbox>
              }
            />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Separator />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'} height={'10%'}>
            <Typography fontSize={14}>선호 주소</Typography>
            <Flexbox
              width={'100%'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Pressable onPress={() => window.alert('스위치 선호 주소로')}>
                <Icon size={32} name={'add-circle'} />
              </Pressable>
            </Flexbox>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Separator />
          </Flexbox.Item>
          <Flexbox alignItems={'center'} justifyContent='space-between'>
            <Flexbox>
              <Typography fontSize={14}>게시글 작성 유의사항</Typography>
            </Flexbox>
            <Pressable onPress={() => window.alert('clicked')}>
              <Flexbox alignItems='center' justifyContent='flex-end'>
                <Typography fontSize={14}>확인하기</Typography>
                <Icon name='chevron-up' size={24} />
              </Flexbox>
            </Pressable>
          </Flexbox>
          <Flexbox
            width={'100%'}
            height={'10%'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Box width={'90%'} pt={20}>
              <Button
                type='normal'
                size='medium'
                onPress={() => window.alert('clicked')}
              >
                확인
              </Button>
            </Box>
          </Flexbox>
        </ScrollView>
      </Flexbox>
    </ScreenWrapper>
  );
};

const RegisterRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='RegisterMain' component={RegisterMain} />
    </Stack.Navigator>
  );
};

export { RegisterRoute, RegisterMain };
