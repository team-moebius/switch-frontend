import { useCallback, useEffect, useState } from 'react';
import { ScrollView, Pressable, useWindowDimensions } from 'react-native';

import { Box, Flexbox, Icon, Typography, Button } from 'src/components/atom';
import {
  Field,
  HashTagInput,
  PressableIcon,
  TagInput,
} from 'src/components/molecule';
import { Separator } from 'src/components/atom/Separator';

import { ImageUploader } from './contents/ImageUploader';

import { AddressModal } from './contents/modals/AddressModal';
import { AttentionModal, DETAILS } from './contents/modals/AttentionModal';

import { ScreenWrapper } from 'src/components/template';

import { HASHTAGS_MOCK, INPUT_TAG_MOCK } from '../Tags.mock';
import { SWITCH_DETAIL_MOCK } from '../../home/SwitchDetailScreen/SwitchList.mock';
import { SwitchDetailData } from './contents/type';

import useExpoLocation from 'src/hooks/useExpoLocation';
import useFetchAddress from 'src/hooks/useFetchAddress';

import { RegisterRouteParamList } from '..';
import { StackScreenProps } from '@react-navigation/stack';
import useExpoImagePicker from 'src/hooks/useExpoImagePicker';

interface RegisterFormProps {
  initialData?: SwitchDetailData;
  onSubmit?: (data: SwitchDetailData) => void;
}

const DEFAULT_DATA: SwitchDetailData = {
  thumbnails: [],
  hashTags: [],
  categories: [],
  oppositeCategories: [],
};

const RegisterFormScreen = ({
  navigation,
  route,
}: StackScreenProps<RegisterRouteParamList, 'RegisterMain'>) => {
  const { initialData, onSubmit } = route.params;

  const { width: screenWidth } = useWindowDimensions();

  const [checkboxState, setCheckboxState] = useState({
    details: false,
    safety: false,
  });

  const [data, setData] = useState<SwitchDetailData>({
    ...(initialData ?? DEFAULT_DATA),
    thumbnails: SWITCH_DETAIL_MOCK['images'] || [],
    categories: INPUT_TAG_MOCK,
    oppositeCategories: INPUT_TAG_MOCK,
    hashTags: HASHTAGS_MOCK,
  });

  // 사진
  const { pickImage } = useExpoImagePicker();
  const [categoryTagInput, setCategoryTagInput] = useState<string>();
  const [oCategoryTagInput, setOCategoryTagInput] = useState<string>();
  const [hashTagInput, setHashTagInput] = useState<string>();
  const [addressModalVisible, setAddressModalVisible] = useState(false);
  const [attentionModalVisible, setAttentionModalVisible] = useState(false);
  const { expoPostalCode, getExpoLocation } = useExpoLocation();
  const { fetchAddress, province, city, dong } = useFetchAddress();
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

  const changeCheckboxDetails = useCallback((checkboxName: string) => {
    if (checkboxName === DETAILS) {
      setCheckboxState((prev) => ({
        ...prev,
        details: !prev.details,
      }));
    } else {
      setCheckboxState((prev) => ({
        ...prev,
        safety: !prev.safety,
      }));
    }
  }, []);

  const handleCloseAttentionModal = () => {
    // api call
    setCheckboxState({ details: false, safety: false });
    setAttentionModalVisible(false);
  };

  const handleGetLocation = useCallback(async () => {
    await getExpoLocation();
  }, [getExpoLocation]);

  const onPressSelectAddress = () => {
    setAddressModalVisible(false);
    navigation.navigate('PreferredAddress');
  };

  const onPressAddPhotos = async () => {
    const result = await pickImage(data.thumbnails.length);

    if (!Array.isArray(result)) {
      switch (result?.error) {
        case 'denied':
          Alert.alert('사진에 접근이 거부되었습니다.');
          break;
        case 'cancelled':
          Alert.alert('이미지 선택이 취소되었습니다.');
          break;
        // 특정 포맷만 요구 될 경우
        case 'format':
          Alert.alert('지원되지 않는 이미지 포맷입니다');
          break;
      }
    } else {
      setData((prev) => ({
        ...prev,
        thumbnails: [...prev.thumbnails, ...result],
      }));
    }
  };

  const onPressDeletePhoto = (src: string) => {
    setData((prev) => ({
      ...prev,
      thumbnails: prev.thumbnails.filter((image) => image !== src),
    }));
  };

  useEffect(() => {
    if (expoPostalCode) {
      fetchAddress(expoPostalCode);
    }
  }, [expoPostalCode, fetchAddress]);

  console.log(province, city, dong);

  return (
    <ScreenWrapper>
      <Flexbox
        height={'100%'}
        width={'100%'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ScrollView>
          <ImageUploader
            images={thumbnails}
            onAdd={
              data.thumbnails.length >= 5
                ? () =>
                    Alert.alert('사진 갯수 제한', '5개를 초과할 수 없습니다.')
                : onPressAddPhotos
            }
            onDeleteItem={onPressDeletePhoto}
            screenWidth={screenWidth}
          />
          <Separator width={'100%'} />
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
                onPress={() => setAddressModalVisible((prev) => !prev)}
              />
            </Flexbox>
            <Flexbox width={'100%'} justifyContent='center'>
              <Flexbox
                width={'90%'}
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
          <Flexbox alignItems={'center'} justifyContent='space-between'>
            <Flexbox>
              <Typography fontSize={14}>게시글 작성 유의사항</Typography>
            </Flexbox>
            <Pressable
              onPress={() => setAttentionModalVisible((prev) => !prev)}
            >
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
            <Box width={'90%'} pt={20}>
              <Button
                type='normal'
                size='medium'
                onPress={() => {
                  onSubmit && onSubmit(data);
                }}
              >
                확인
              </Button>
            </Box>
          </Flexbox>
        </ScrollView>
        <AddressModal
          visible={addressModalVisible}
          onPressBack={() => setAddressModalVisible(false)}
          onPressSelectAddress={onPressSelectAddress}
          handleGetLocation={handleGetLocation}
        />
        <AttentionModal
          visible={attentionModalVisible}
          onPressBack={() => setAttentionModalVisible(false)}
          checkboxState={checkboxState}
          changeCheckboxDetails={changeCheckboxDetails}
          handleCloseAttentionModal={handleCloseAttentionModal}
        />
      </Flexbox>
    </ScreenWrapper>
  );
};

export { RegisterFormScreen, type RegisterFormProps };