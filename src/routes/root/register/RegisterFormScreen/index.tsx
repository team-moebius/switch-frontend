/* react */
import { useCallback, useEffect, useState } from 'react';
import {
  ScrollView,
  Pressable,
  useWindowDimensions,
  Alert,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';

/* atom molecule etc.. */
import {
  Box,
  Flexbox,
  Icon,
  Typography,
  Button,
  Separator,
} from 'src/components/atom';
import {
  Field,
  HashTagInput,
  PressableIcon,
  TagInput,
} from 'src/components/molecule';
import { KeyboardScreenWrapper } from 'src/components/template/KeyboardScreenWrapper';

import { ImageUploader } from './contents/ImageUploader';

import { AddressModal } from './contents/modals/AddressModal';
import { AttentionModal, DETAILS } from './contents/modals/AttentionModal';

/* custom hooks */
import useExpoLocation from 'src/hooks/useExpoLocation';
import useFetchAddress from 'src/hooks/useFetchAddress';
import { useCommonMutation } from 'src/hooks/useCommonMutation';
import useExpoImagePicker from 'src/hooks/useExpoImagePicker';

/* navigation */
import { RegisterRouteParamList } from '..';
import { StackScreenProps } from '@react-navigation/stack';

/* api */
import { ItemApi } from 'src/api';
import {
  ItemRequest,
  ItemResponse,
  ItemUpdateRequest,
} from '@team-moebius/api-typescript';
import { RegisterDto } from './contents/type';

/* mock */
import { HASHTAGS_MOCK, INPUT_TAG_MOCK } from '../Tags.mock';
import { SWITCH_DETAIL_MOCK } from '../../home/SwitchDetailScreen/SwitchList.mock';
import PALETTE from 'src/assets/theme/colors/palettes';
import COLORS from 'src/assets/theme/base';

interface RegisterFormProps {
  initialData?: ItemResponse;
  getAddress?: string;
}

const defaultForm = {
  name: '',
  description: '',
  images: [],
  category: '',
  preferredCategories: [],
  hashtags: [],
  preferredLocations: [],
};

const RegisterFormScreen = ({
  navigation,
  route,
}: StackScreenProps<RegisterRouteParamList, 'RegisterForm'>) => {
  /* route params */
  const { initialData: paramsData, getAddress } = route.params;
  const initialData: RegisterDto | undefined = paramsData && {
    name: paramsData.name ?? '',
    description: paramsData.description ?? '',
    images: paramsData.images ?? [],
    // category: paramsData.category,
    category: '',
    hashtags: Array.from(paramsData.hashtags?.values() ?? []),
    preferredCategories: Array.from(
      paramsData.preferredCategories?.values() ?? []
    ),
    preferredLocations: Array.from(
      paramsData.preferredLocations?.values() ?? []
    ),
  };

  /* apis */
  // initData 여부로 api 달아줘도 될듯?
  const { mutate: createMutate } = useCommonMutation<ItemResponse, ItemRequest>(
    {
      api: ItemApi.createItem, // TODO : 유효성 검사하기
      onSuccess(data, variables) {
        console.debug(data, variables);
        // queryClient.invalidateQueries(['myInfoMain_userApi_getUserInfo']);
      },
      onError(error, variables) {
        console.error(error, variables);
      },
    }
  );
  const { mutate: editMutate } = useCommonMutation<
    ItemResponse,
    ItemUpdateRequest
  >({
    api: ItemApi.updateItem, // TODO : 유효성 검사하기
    onSuccess(data, variables) {
      console.debug(data, variables);
      // queryClient.invalidateQueries(['myInfoMain_userApi_getUserInfo']);
    },
    onError(error, variables) {
      console.error(error, variables);
    },
  });

  /* hooks */
  const { pickImage } = useExpoImagePicker();
  const { width: screenWidth } = useWindowDimensions();

  /* states */
  const [checkboxState, setCheckboxState] = useState({
    details: false,
    safety: false,
  });
  // 기본 state
  const [data, setData] = useState<RegisterDto>(defaultForm);
  const {
    name,
    description = '',
    images,
    hashtags,
    category,
    preferredCategories,
    preferredLocations,
  } = data;

  // 등록하는 물건 종류 input
  const [categoryTagInput, setCategoryTagInput] = useState<string>();
  // 스위치 원하는 물건 종류 input
  const [oCategoryTagInput, setOCategoryTagInput] = useState<string>();
  // 해시 태그 input
  const [hashTagInput, setHashTagInput] = useState<string>();

  const [addressModalVisible, setAddressModalVisible] = useState(false);
  const [attentionModalVisible, setAttentionModalVisible] = useState(false);
  const { expoPostalCode, getExpoLocation } = useExpoLocation();
  const { fetchAddress, province, city, dong } = useFetchAddress();

  /* handlers */
  // name, desc 입력 핸들러
  const changeHandler = useCallback((change: Partial<RegisterDto>) => {
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
    if (paramsData) {
    } else if (
      name.length <= 0 ||
      description.length <= 0 ||
      category.length <= 0
    ) {
      Alert.alert('알림', '제목, 설명, 카테고리는 반드시 채워주셔야 합니다.');
    } else if (!checkboxState.details || !checkboxState.safety) {
      Alert.alert('알림', '주의사항에 모두 동의해 주셔야 합니다.');
    } else {
      createMutate({
        ...data,
        hashtags,
        preferredCategories,
        preferredLocations,
        type: 'GOODS',
      });
    }

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
    const result = await pickImage(images.length);

    if (!Array.isArray(result)) {
      switch (result?.error) {
        case 'denied':
          Alert.alert('사진에 접근이 거부되었습니다.');
          break;
        case 'canceled':
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
        images: [...prev.images, ...result],
      }));
    }
  };

  const onPressDeletePhoto = (src: string) => {
    setData((prev) => ({
      ...prev,
      images: prev.images.filter((image) => image !== src),
    }));
  };

  const onSubmitCategory = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    if (category.length > 0) {
      Alert.alert('알림', '카테고리는 하나만 입력 가능합니다.');
    } else if (categoryTagInput && categoryTagInput.length > 0) {
      setData((prev) => ({
        ...prev,
        category: categoryTagInput,
      }));
    }
    setCategoryTagInput('');
  };

  const onSubmitPreferredCategory = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    if (preferredCategories.length >= 3) {
      Alert.alert('알림', '선호 카테고리는 3개까지 입력 가능합니다.');
    } else if (
      oCategoryTagInput &&
      oCategoryTagInput.length > 0 &&
      !preferredCategories.includes(oCategoryTagInput)
    ) {
      setData((prev) => ({
        ...prev,
        preferredCategories: [...preferredCategories, oCategoryTagInput],
      }));
    }
    setOCategoryTagInput('');
  };

  const onSubmitHashTags = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    if (hashtags.length >= 5) {
      Alert.alert('알림', '해쉬태그는 5개까지 입력 가능합니다.');
    } else if (
      hashTagInput &&
      hashTagInput.length > 0 &&
      !hashtags.includes(hashTagInput)
    ) {
      setData((prev) => ({
        ...prev,
        hashtags: [...hashtags, `#${hashTagInput}`],
      }));
    }
    setHashTagInput('');
  };

  const onPressCategory = () => {
    setData((prev) => ({ ...prev, category: '' }));
  };

  const onPressPreferredCategory = (preferredCategory: string) => {
    setData((prev) => ({
      ...prev,
      preferredCategories: preferredCategories.filter(
        (preferred) => preferred !== preferredCategory
      ),
    }));
  };

  const onPressHashtags = (hashtag: string) => {
    setData((prev) => ({
      ...prev,
      hashtags: hashtags.filter((tag) => tag !== hashtag),
    }));
  };

  const onPressPreferredLocations = (location: string) => {
    setData((prev) => ({
      ...prev,
      preferredLocations: prev.preferredLocations.filter(
        (prefer) => prefer !== location
      ),
    }));
  };

  /* useEffect */
  useEffect(() => {
    if (expoPostalCode) {
      fetchAddress(expoPostalCode);
    }
  }, [expoPostalCode, fetchAddress]);

  useEffect(() => {
    if (paramsData && initialData) setData(initialData);
  }, []);

  useEffect(() => {
    if (getAddress) {
      if (preferredLocations.length >= 3)
        return Alert.alert(
          '알림',
          '선호 주소는 최대 3개만 입력할 수 있습니다.'
        );
      if (!preferredLocations.includes(getAddress)) {
        setData((prev) => ({
          ...prev,
          preferredLocations: [...prev.preferredLocations, getAddress],
        }));
      }
    }
  }, [getAddress]);

  return (
    <KeyboardScreenWrapper>
      <Flexbox
        height={'100%'}
        width={'100%'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ScrollView>
          <ImageUploader
            images={images}
            onAdd={
              images.length >= 5
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
            value={name}
            name={'name'}
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
            border={`0 solid ${PALETTE.gray[300]}`}
          />

          <Separator />
          <TagInput
            tags={
              category.length > 0
                ? [
                    {
                      children: category,
                      color: 'white',
                      backgroundColor: PALETTE.yellow[200],
                      onPress: onPressCategory,
                    },
                  ]
                : []
            }
            width={'100%'}
            name={'tagInput'}
            onChangeText={setCategoryTagInput}
            placeholder={'등록하는 물건의 종류를 작성해주세요.'}
            value={categoryTagInput}
            functionalElement={
              <Flexbox
                flexDirection={'column'}
                justifyContent={'space-between'}
                gap={5}
              >
                <Typography color={'black'} fontSize={12}>
                  {category ? '1/1' : '0/1'}
                </Typography>
              </Flexbox>
            }
            onSubmitEditing={onSubmitCategory}
          />
          <Separator />
          <TagInput
            tags={preferredCategories.map((preferredCategory) => ({
              children: preferredCategory,
              onPress: () => onPressPreferredCategory(preferredCategory),
              color: 'white',
              backgroundColor: PALETTE.yellow[200],
            }))}
            width={'100%'}
            name={'tagInput'}
            onChangeText={setOCategoryTagInput}
            placeholder={'스위치를 희망하는 물품이나 종류를 작성해주세요.'}
            value={oCategoryTagInput}
            functionalElement={
              <Flexbox
                flexDirection={'column'}
                justifyContent={'space-between'}
                gap={5}
              >
                <Typography color={'black'} fontSize={12}>
                  {preferredCategories.length + '/3'}
                </Typography>
              </Flexbox>
            }
            onSubmitEditing={onSubmitPreferredCategory}
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
            hashTags={hashtags.map((hashtag) => ({
              children: hashtag,
              color: 'black',
              backgroundColor: 'white',
              onPress: () => onPressHashtags(hashtag),
            }))}
            functionalElement={
              <Flexbox
                flexDirection={'column'}
                justifyContent={'space-between'}
                gap={5}
              >
                <Typography color={'black'} fontSize={12}>
                  {hashtags.length + '/5'}
                </Typography>
              </Flexbox>
            }
            onSubmitEditing={onSubmitHashTags}
          />
          <Separator />
          <Typography fontSize={14}>선호 주소</Typography>
          <Flexbox width={'100%'} flexDirection={'column'} gap={20}>
            <Flexbox
              width={'100%'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              {preferredLocations.length < 3 && (
                <PressableIcon
                  size={32}
                  name={'add-circle'}
                  onPress={() => setAddressModalVisible((prev) => !prev)}
                />
              )}
            </Flexbox>
            <Flexbox
              width={'100%'}
              justifyContent='center'
              alignItems='center'
              gap={10}
              flexDirection='column'
            >
              {preferredLocations.map((location) => (
                <Flexbox
                  width={'90%'}
                  padding={10}
                  backgroundColor={COLORS.secondary[200]}
                  borderRadius={6}
                  alignItems={'center'}
                  key={location}
                >
                  <Flexbox
                    width={'100%'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Typography
                      fontSize={18}
                      fontWeight={'200'}
                      color={COLORS.neutral.white}
                    >
                      {location}
                    </Typography>
                    <PressableIcon
                      name='close'
                      size={24}
                      color={COLORS.neutral.white}
                      onPress={() => onPressPreferredLocations(location)}
                    />
                  </Flexbox>
                </Flexbox>
              ))}
            </Flexbox>
          </Flexbox>
          <Separator />
          <Flexbox
            width={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Box width={'90%'} pt={20} pb={20}>
              <Button
                type='normal'
                size='medium'
                onPress={() => {
                  setAttentionModalVisible(true);
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
    </KeyboardScreenWrapper>
  );
};

export { RegisterFormScreen, type RegisterFormProps };
