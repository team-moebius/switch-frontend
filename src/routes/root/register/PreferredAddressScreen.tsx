import React, { useState } from 'react';
import { Box, Button, Flexbox, Select, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

// TODO: onPressItem type 지정해주기

const PROVINCES = [
  '서울특별시',
  '부산광역시',
  '대구광역시',
  '인천광역시',
  '광주광역시',
  '대전광역시',
  '울산광역시',
  '세종특별자치시',
  '경기도',
  '강원도',
  '충청북도',
  '충청남도',
  '전라북도',
  '전라남도',
  '경상북도',
  '경상남도',
  '제주특별자치도',
];

type SelectionProvinceType = (typeof PROVINCES)[number];

const PreferredAddressScreen = () => {
  const [province, setProvince] = useState<SelectionProvinceType>('서울특별시');
  const [city, setCity] = useState<string>('광진구');
  const [dong, setDong] = useState<string>('화양동');
  const [cityList, setCityList] = useState<string[]>([]);
  const [dongList, setDongList] = useState<string[]>([]);

  return (
    <ScreenWrapper>
      <Flexbox
        flexDirection={'column'}
        width={'100%'}
        height={'100%'}
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
              onPressItem={(value) =>
                setProvince(value as SelectionProvinceType)
              }
            />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Select
              value={city}
              options={cityList}
              onPressItem={(value) => setCity(value)}
            />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Select
              value={dong}
              options={dongList}
              onPressItem={(value) => setDong(value)}
            />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'} alignSelf={'center'} pt={30}>
            <Typography fontSize={18}>입력한 주소</Typography>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Typography fontSize={14}>
              {`${province} ${city} ${dong}`}
            </Typography>
          </Flexbox.Item>
        </Flexbox>

        <Flexbox width={'100%'} alignItems='center' justifyContent='center'>
          <Box width={'90%'}>
            <Button
              type={'normal'}
              size={'medium'}
              onPress={() => window.alert('확인')}
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
