import { StackScreenProps } from '@react-navigation/stack';
import { useState } from 'react';
import { Box, Button, Flexbox, Select, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';
import { RegisterRouteParamList } from '.';
import { address } from './address';
import { KeyboardScreenWrapper } from 'src/components/template/KeyboardScreenWrapper';
import { Alert } from 'react-native';
import { FONT_SIZE, PADDING } from 'src/assets/theme/base';

// TODO: onPressItem type 지정해주기

const PROVINCES = Object.keys(address);
type SelectionProvinceType = (typeof PROVINCES)[number];

interface PreferredAddressProps {
  prevAddress: string | undefined;
}

const PreferredAddressScreen = ({
  navigation,
  route,
}: StackScreenProps<RegisterRouteParamList, 'PreferredAddress'>) => {
  const { prevAddress } = route.params;
  const prev = prevAddress?.split(' ');
  const [province, setProvince] = useState<SelectionProvinceType>(
    prev ? prev[0] : PROVINCES[0]
  );
  const [city, setCity] = useState<string>(prev ? prev[1] : '');
  const [cityList, setCityList] = useState<string[]>(
    Object.keys(address[province])
  );
  const [dong, setDong] = useState<string>(prev ? prev[2] : '');
  const [dongList, setDongList] = useState<string[]>(
    prev ? address[prev[0]][prev[1]] : []
  );

  const fullAddress = `${province} ${city} ${dong}`;

  const onClickAdd = () => {
    if (city.length <= 0 || dong.length <= 0)
      return Alert.alert('알림', '위치를 정확히 입력해 주세요.');
    navigation.navigate('RegisterForm', {
      getAddress: fullAddress,
    });
  };
  return (
    <ScreenWrapper>
      <Flexbox
        flexDirection={'column'}
        height={'100%'}
        pl={PADDING.wrapper.horizontal}
        pr={PADDING.wrapper.horizontal}
        mt={20}
        rowGap={20}
      >
        <Flexbox.Item width={'100%'}>
          <Select
            value={province}
            options={PROVINCES}
            onPressItem={(value) => {
              setProvince(value);
              setCityList(Object.keys(address[value]));
              if (value !== province) {
                setCity('');
                setDong('');
              }
            }}
          />
        </Flexbox.Item>
        <Flexbox.Item width={'100%'}>
          <Select
            value={city}
            options={cityList}
            onPressItem={(value) => {
              setCity(value);
              setDongList(address[province][value]);
              if (value !== city) {
                setDong('');
              }
            }}
          />
        </Flexbox.Item>
        <Flexbox.Item width={'100%'}>
          <Select
            value={dong}
            disabled={city.length === 0}
            options={dongList}
            onPressItem={(value) => setDong(value)}
          />
        </Flexbox.Item>
        <Flexbox.Item width={'100%'}>
          <Typography fontSize={FONT_SIZE.bigger}>입력한 주소</Typography>
        </Flexbox.Item>
        <Flexbox.Item width={'100%'}>
          <Typography fontSize={FONT_SIZE.normal}>{fullAddress}</Typography>
        </Flexbox.Item>
        <Box width={'100%'}>
          <Button type={'normal'} size={'medium'} onPress={onClickAdd}>
            확인
          </Button>
        </Box>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { PreferredAddressScreen, type PreferredAddressProps };
