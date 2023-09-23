import React, { useState } from 'react';
import { Button, Flexbox, Select, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

// TODO: onPressItem type 지정해주기

const PreferredAddress = () => {
  const [province, setProvince] = useState('서울특별시');
  const [city, setCity] = useState('광진구');
  const [dong, setDong] = useState('화양동');

  return (
    <ScreenWrapper>
      <Flexbox
        flexDirection={'column'}
        width={'100%'}
        height={'100%'}
        justifyContent={'space-between'}
      >
        <Flexbox flexDirection={'column'} width={'100%'} gap={20} pt={50}>
          <Flexbox.Item width={'100%'}>
            <Select
              value={province}
              options={['서울특별시', '경기도', '강원도']}
              onPressItem={(value) => setProvince(value)}
            />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Select
              value={city}
              options={['광진구', '성남시', '원주시']}
              onPressItem={(value) => setCity(value)}
            />
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Select
              value={dong}
              options={['화양동', '상대원동', '단계동']}
              onPressItem={(value) => setDong(value)}
            />
          </Flexbox.Item>
          <Flexbox.Item alignSelf={'center'} pt={30}>
            <Typography fontSize={18}>입력한 주소</Typography>
          </Flexbox.Item>
          <Flexbox.Item width={'100%'}>
            <Typography fontSize={14}>
              {`${province} ${city} ${dong}`}
            </Typography>
          </Flexbox.Item>
        </Flexbox>

        <Flexbox width={'100%'}>
          <Button
            type={'normal'}
            size={'middle'}
            onPress={() => window.alert('확인')}
          >
            확인
          </Button>
        </Flexbox>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { PreferredAddress };
