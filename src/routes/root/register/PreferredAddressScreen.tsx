import { StackScreenProps } from '@react-navigation/stack';
import { useState } from 'react';
import { Box, Button, Flexbox, Select, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';
import { RegisterRouteParamList } from '.';
import { address } from './address';
import { KeyboardScreenWrapper } from 'src/components/template/KeyboardScreenWrapper';
import { Alert } from 'react-native';

// TODO: onPressItem type 지정해주기

const PROVINCES = Object.keys(address);
type SelectionProvinceType = (typeof PROVINCES)[number];

const PreferredAddressScreen = ({
  navigation,
}: StackScreenProps<RegisterRouteParamList, 'PreferredAddress'>) => {
  const [province, setProvince] = useState<SelectionProvinceType>(PROVINCES[0]);
  const [city, setCity] = useState<string>('');
  const [dong, setDong] = useState<string>('');
  const [cityList, setCityList] = useState<string[]>(
    Object.keys(address[province])
  );
  const [dongList, setDongList] = useState<string[]>([]);
  const fullAddress = `${province} ${city} ${dong}`;

  return (
    <ScreenWrapper>
      <Flexbox
        flexDirection={'column'}
        width={'100%'}
        height={'95%'}
        justifyContent={'space-between'}
      >
        <Flexbox
          flexDirection={'column'}
          width={'90%'}
          gap={20}
          pt={50}
          ml={'auto'}
          mr={'auto'}
        >
          <Flexbox.Item width={'100%'}>
            <Select
              value={province}
              options={PROVINCES}
              onPressItem={(value) => {
                setProvince(value as SelectionProvinceType);
                setCityList(Object.keys(address[value]));
              }}
            />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Select
              value={city}
              options={cityList}
              onPressItem={(value) => {
                setCity(value as string);
                setDongList(address[province][value]);
              }}
            />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Select
              value={dong}
              options={dongList}
              onPressItem={(value) => setDong(value as string)}
            />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'} alignSelf={'center'} pt={30}>
            <Typography fontSize={18}>입력한 주소</Typography>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Typography fontSize={14}>{fullAddress}</Typography>
          </Flexbox.Item>
        </Flexbox>

        <Flexbox width={'100%'} alignItems='center' justifyContent='center'>
          <Box width={'90%'}>
            <Button
              type={'normal'}
              size={'medium'}
              onPress={() => {
                if (city.length <= 0 || dong.length <= 0)
                  return Alert.alert('알림', '위치를 정확히 입력해 주세요.');
                navigation.navigate('RegisterForm', {
                  getAddress: fullAddress,
                });
              }}
            >
              확인
            </Button>
          </Box>
        </Flexbox>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { PreferredAddressScreen };
