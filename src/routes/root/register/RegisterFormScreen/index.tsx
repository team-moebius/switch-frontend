/* react */
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import {
  useWindowDimensions,
  Alert,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';

/* atom molecule etc.. */
import {
  Box,
  Flexbox,
  Typography,
  Button,
  Separator,
  Select,
  TextInput,
} from 'src/components/atom';
import {
  CountingTextarea,
  PressableIcon,
  ScreenHeader,
} from 'src/components/molecule';
import { KeyboardScreenWrapper } from 'src/components/template/KeyboardScreenWrapper';
import { ImageUploader } from './contents/ImageUploader';
import { OptionValue } from 'src/components/atom/Select';

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

/* style */
import PALETTE from 'src/assets/theme/colors/palettes';
import { COLORS, FONT_SIZE, PADDING } from 'src/assets/theme/base';
import { CancelEditModal } from '../../home/modals';

const REGISTER_CATEGORY = [
  '수입명품',
  '패션의류',
  '패션잡화',
  '뷰티',
  '출산 / 유아동',
  '모바일 / 태블릿',
  '가전제품',
  '노트북 / PC',
  '카메라 / 캠코더',
  '가구 / 인테리어',
  '리빙 / 생활',
  '게임',
  '반려동물 / 취미',
  '도서 / 음반 / 문구',
  '티켓 / 쿠폰',
  '스포츠',
  '레저 / 여행',
  '공구 / 산업용품',
] as const;
type RegisterCategory = (typeof REGISTER_CATEGORY)[number];

interface RegisterDto {
  category: RegisterCategory | '카테고리 선택';
  name: string;
  description: string;
  images: Array<string>;
  preferredCategory: RegisterCategory | '스위치 희망 카테고리 선택';
  preferredLocations: Array<string>;
}

interface RegisterFormProps {
  // initialData?: ItemResponse; TODO : 🚨
  initialData?: RegisterDto;
  getAddress?: string;
}

const RegisterFormScreen = ({
  navigation,
  route,
}: StackScreenProps<RegisterRouteParamList, 'RegisterForm'>) => {
  /* route params */
  const { initialData: paramsData, getAddress } = route.params;
  const initialData: RegisterDto = paramsData ?? {
    name: '',
    description: '',
    images: [],
    category: '카테고리 선택',
    preferredCategory: '스위치 희망 카테고리 선택',
    preferredLocations: [],
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
  // 게시글 id가 있을 거 같은데 있으면 이거 쓰면 될 듯?
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
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  // 기본 state
  const [data, setData] = useState<RegisterDto>(initialData);
  const {
    name,
    description,
    images,
    category,
    preferredCategory,
    preferredLocations,
  } = data;

  // TODO : 🚨 주소 설정 옵션 선택 모달과 관련된 변수는 주석처리
  // const { expoPostalCode, getExpoLocation } = useExpoLocation();
  // const { fetchAddress, province, city, dong } = useFetchAddress();
  // const [addressModalVisible, setAddressModalVisible] = useState(false);
  const [attentionModalVisible, setAttentionModalVisible] = useState(false);

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
        // TODO : api 파라미터가 preferredCategories에서 preferredCategory로 수정되어야 될 거 같음.
        preferredCategory,
        preferredLocations,
        type: 'GOODS',
      });
    }

    setCheckboxState({ details: false, safety: false });
    setAttentionModalVisible(false);
  };
  // TODO : 🚨 주소 설정 옵션 선택 모달과 관련된 변수는 주석처리
  // const handleGetLocation = useCallback(async () => {
  //   await getExpoLocation();
  // }, [getExpoLocation]);
  // const onPressSelectAddress = () => {
  //   setAddressModalVisible(false);
  //   navigation.navigate('PreferredAddress');
  // };

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

  const onClickCategory = (value: RegisterCategory | '카테고리 선택') => {
    setData({ ...data, category: value });
  };

  const onClickPreferredCategory = (
    value: RegisterCategory | '스위치 희망 카테고리 선택'
  ) => {
    setData({ ...data, preferredCategory: value });
  };

  const onPressPreferredLocations = (location: string) => {
    setData((prev) => ({
      ...prev,
      preferredLocations: prev.preferredLocations.filter(
        (prefer) => prefer !== location
      ),
    }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => {
        if (paramsData) {
          return (
            <ScreenHeader
              {...props}
              center={'물품 수정하기'}
              setModalVisible={setCancelModalVisible}
              isConfirmGoBack
            />
          );
        } else {
          return <ScreenHeader {...props} center={'물품등록하기'} />;
        }
      },
    });
  }, []);

  // TODO : 🚨 주소 설정 옵션 선택 모달과 관련된 변수는 주석처리
  /* useEffect */
  // useEffect(() => {
  //   if (expoPostalCode) {
  //     fetchAddress(expoPostalCode);
  //   }
  // }, [expoPostalCode, fetchAddress]);

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
        flexDirection={'column'}
        pl={PADDING.wrapper.horizontal}
        pr={PADDING.wrapper.horizontal}
      >
        <ImageUploader
          images={images}
          onClickAdd={
            images.length >= 5
              ? () => Alert.alert('사진 갯수 제한', '5개를 초과할 수 없습니다.')
              : onPressAddPhotos
          }
          onDeleteItem={onPressDeletePhoto}
          screenWidth={screenWidth}
        />
        <Box mt={20}>
          <TextInput
            placeholder={'물품명'}
            value={name}
            name={'name'}
            style={{ borderWidth: 1, borderColor: 'black' }}
            onChangeText={(str: string) => changeHandler({ name: str })}
          />
        </Box>
        <Box mt={20}>
          <Select<RegisterCategory | '카테고리 선택'>
            options={[...REGISTER_CATEGORY]}
            value={category}
            onPressItem={onClickCategory}
          />
        </Box>
        <Box mt={20} mb={20}>
          <Select<RegisterCategory | '스위치 희망 카테고리 선택'>
            options={[...REGISTER_CATEGORY]}
            onPressItem={onClickPreferredCategory}
            value={preferredCategory}
          />
        </Box>
        <CountingTextarea
          placeholder='물품에 대한 설명이나 스토리를 작성해주세요.'
          value={description}
          maxLength={200}
          onChange={(str) => changeHandler({ description: str })}
        />
        <Box mt={20}>
          <Typography fontSize={FONT_SIZE.normal}>
            선호 주소 (최대 3곳까지 추가가능)
          </Typography>
          <Flexbox
            alignItems={'center'}
            justifyContent={'center'}
            mt={10}
            mb={10}
          >
            {preferredLocations.length < 3 && (
              <PressableIcon
                size={32}
                name={'add-circle'}
                // TODO : 🚨 주소 설정 옵션 선택 모달과 관련된 변수는 주석처리
                // onPress={() => setAddressModalVisible((prev) => !prev)}
                onPress={() =>
                  navigation.navigate('PreferredAddress', {
                    prevAddress: preferredLocations.at(-1),
                  })
                }
              />
            )}
          </Flexbox>
          <Flexbox gap={10} flexDirection='column'>
            {preferredLocations.map((location) => (
              <Flexbox
                padding={10}
                backgroundColor={COLORS.secondary[200]}
                borderRadius={6}
                key={location}
              >
                <Flexbox
                  width={'100%'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Typography
                    fontSize={FONT_SIZE.bigger}
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
        </Box>
        <Separator width={'100%'} />
        <Box width={'100%'}>
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
        {/* TODO : 🚨 주소 설정 옵션 선택 모달과 관련된 변수는 주석처리 */}
        {/* <AddressModal
          visible={addressModalVisible}
          onPressBack={() => setAddressModalVisible(false)}
          onPressSelectAddress={onPressSelectAddress}
          handleGetLocation={handleGetLocation}
        /> */}
        <AttentionModal
          visible={attentionModalVisible}
          onPressBack={() => setAttentionModalVisible(false)}
          checkboxState={checkboxState}
          changeCheckboxDetails={changeCheckboxDetails}
          handleCloseAttentionModal={handleCloseAttentionModal}
        />
      </Flexbox>
      <CancelEditModal
        visible={cancelModalVisible}
        onPressBack={() => setCancelModalVisible(false)}
        onConfirm={() => {
          setCancelModalVisible(false);
          navigation.goBack();
        }}
        onCancel={() => setCancelModalVisible(false)}
      />
    </KeyboardScreenWrapper>
  );
};

export { RegisterFormScreen, type RegisterFormProps };
