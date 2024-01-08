import { Box, Flexbox, Icon, Typography, Button } from 'src/components/atom';
import { ScrollView, Pressable } from 'react-native';
import { useWindowDimensions } from 'react-native';

import {
  Field,
  HashTagInput,
  PressableIcon,
  TagInput,
} from 'src/components/molecule';
import { Separator } from 'src/components/atom/Separator';
import { useCallback, useState } from 'react';
import { HASHTAGS_MOCK, INPUT_TAG_MOCK } from '../../Tags.mock';
import { ImageUploader } from './ImageUploader';
import { SWITCH_DETAIL_MOCK } from '../../../home/HomeMainScreen/SwitchList.mock';
import { SwitchDetailData } from '../type';
import { ScreenWrapper } from 'src/components/template';

interface SwitchDetailFormProps {
  initialData?: SwitchDetailData;
  onSubmit?: (data: SwitchDetailData) => void;
  navigation: any;
}

const DEFAULT_DATA: SwitchDetailData = {
  thumbnails: [],
  hashTags: [],
  categories: [],
  oppositeCategories: [],
};

const SwitchDetailForm = ({
  initialData = DEFAULT_DATA,
  onSubmit,
  navigation,
}: SwitchDetailFormProps) => {
  const { width: screenWidth } = useWindowDimensions();
  const [data, setData] = useState<SwitchDetailData>({
    ...initialData,
    thumbnails: SWITCH_DETAIL_MOCK['images'] || [],
    categories: INPUT_TAG_MOCK,
    oppositeCategories: INPUT_TAG_MOCK,
    hashTags: HASHTAGS_MOCK,
  });
  const [categoryTagInput, setCategoryTagInput] = useState<string>();
  const [oCategoryTagInput, setOCategoryTagInput] = useState<string>();
  const [hashTagInput, setHashTagInput] = useState<string>();

  const {
    title,
    description = '',
    thumbnails,
    hashTags,
    categories,
    oppositeCategories,
  } = data;

  const changeHandler = useCallback((change: Partial<SwitchDetailData>) => {
    setData((prev) => ({ ...prev, ...change }));
  }, []);

  return (
    <ScreenWrapper>
      <Flexbox
        height={'100%'}
        width={'100%'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Flexbox.Item width={screenWidth - 20}>
          <ScrollView>
            <ImageUploader
              images={thumbnails}
              onAdd={() => {
                alert('add image');
              }}
              onDeleteItem={(src, i) => {
                console.debug('delete click:', src, i);
              }}
              screenWidth={screenWidth}
            />
            <Separator />
            <Field
              width={'100%'}
              placeholder={'물품명'}
              fieldType={'textInput'}
              value={title}
              name={'title'}
              style={{ borderWidth: 0 }}
              onChange={changeHandler}
            />
            <Separator />
            <Field
              width={'100%'}
              fieldType={'countingTextarea'}
              name={'description'}
              placeholder={'물품에 대한 설명이나 스토리를 작성해주세요.'}
              value={description}
              onChange={changeHandler}
              maxLength={200}
              border={'0 solid #979797'}
            />
            <Separator />
            <TagInput
              tags={categories}
              width={'100%'}
              name={'tagInput'}
              onChangeText={setCategoryTagInput}
              placeholder={'등록하는 물건의 종류를 작성해주세요.'}
              value={categoryTagInput}
            />
            <Separator />
            <TagInput
              tags={oppositeCategories}
              width={'100%'}
              name={'tagInput'}
              onChangeText={setOCategoryTagInput}
              placeholder={'스위치를 희망하는 물품이나 종류를 작성해주세요.'}
              value={oCategoryTagInput}
            />
            <Separator />
            <HashTagInput
              value={hashTagInput}
              width={'100%'}
              itemsWrap={'wrap'}
              name={'tagInput'}
              placeholder={'물품에 대한 해시태그를 작성해주세요.(선택사항)'}
              disabled={false}
              onChangeText={setHashTagInput}
              hashTags={hashTags}
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
                    onPress={() => {
                      alert('해시태그 더보기');
                    }}
                    wide={false}
                  >
                    <Typography fontSize={14}>더보기</Typography>
                  </Button>
                </Flexbox>
              }
            />
            <Separator />
            <Typography fontSize={14}>선호 주소</Typography>
            <Flexbox width={'100%'} flexDirection={'column'} gap={20}>
              <Flexbox
                width={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <PressableIcon
                  size={32}
                  name={'add-circle'}
                  onPress={() => {
                    navigation.navigate('PreferredAddress');
                  }}
                />
              </Flexbox>
              <Flexbox width={'100%'} justifyContent='center'>
                <Flexbox
                  width={'100%'}
                  padding={10}
                  backgroundColor={'#0cd092'}
                  borderRadius={6}
                  alignItems={'center'}
                >
                  <Flexbox
                    width={'100%'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Typography fontSize={18} fontWeight={'200'} color={'#fff'}>
                      경기도 부천시 상동
                    </Typography>
                    <Icon name='close' size={24} color={'#fff'} />
                  </Flexbox>
                </Flexbox>
              </Flexbox>
            </Flexbox>
            <Separator />
            <Flexbox alignItems={'center'} justifyContent={'space-between'}>
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
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Box width={'100%'} pt={20}>
                <Button
                  type='normal'
                  size='medium'
                  onPress={() => {
                    onSubmit && onSubmit(data);
                    navigation.navigate('RegisteredList');
                  }}
                >
                  확인
                </Button>
              </Box>
            </Flexbox>
          </ScrollView>
        </Flexbox.Item>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { SwitchDetailForm };
