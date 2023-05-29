import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StackParams } from 'src/App';
import { Button, Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template/ScreenWrapper';

type MainScreenProps = NativeStackScreenProps<StackParams, 'Main'>;
const MainScreen = ({ navigation }: MainScreenProps) => {
  return (
    <ScreenWrapper>
      <Flexbox
        top={'30%'}
        position={'absolute'}
        justifyContent={'center'}
        width={'100%'}
        alignItems={'center'}
      >
        <Typography fontWeight={'300'} fontSize={40} color={'black'}>
          Switch
        </Typography>
      </Flexbox>
      <Flexbox
        justifyContent={'center'}
        bottom={'30%'}
        width={'100%'}
        position={'absolute'}
      >
        <Button
          title={'가입하기'}
          onPress={() => navigation.navigate('Sample')}
        />
        <Button title={'로그인'} onPress={() => alert('로그인')} />
      </Flexbox>
    </ScreenWrapper>
  );
};

export { MainScreen };
