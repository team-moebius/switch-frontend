import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { StackParams } from 'src/App';
import { Button, Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template/ScreenWrapper';
import { ThemeContext } from 'src/context/theme';

type MainScreenProps = StackScreenProps<StackParams, 'Main'>;
const MainScreen = ({ navigation }: MainScreenProps) => {
  const { color } = useContext(ThemeContext);
  return (
    <ScreenWrapper>
      <Flexbox
        top={'30%'}
        position={'absolute'}
        justifyContent={'center'}
        width={'100%'}
        alignItems={'center'}
      >
        <Typography
          fontWeight={'300'}
          fontSize={40}
          color={color.neutral['300']}
        >
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
          type={'normal'}
          size={'middle'}
          onPress={() => navigation.navigate('Sample')}
        >
          가입하기
        </Button>
        <Button type={'normal'} size={'middle'} onPress={() => alert('로그인')}>
          로그인
        </Button>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { MainScreen };
