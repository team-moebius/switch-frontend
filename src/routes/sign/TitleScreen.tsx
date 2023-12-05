// import { StackScreenProps } from '@react-navigation/stack
import React, { useContext } from 'react';
import { Button, Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template/ScreenWrapper';
import { ThemeContext } from 'src/context/theme';
import { UserContext } from 'src/context/user';

const TitleScreen = ({ navigation }) => {
  const { color } = useContext(ThemeContext);
  const { login } = useContext(UserContext);

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
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        bottom={'30%'}
        width={'100%'}
        gap={8}
        position={'absolute'}
      >
        <Flexbox.Item width={'80%'}>
          <Button
            type={'normal'}
            size={'medium'}
            onPress={() => navigation.navigate('SignUp')}
          >
            가입하기
          </Button>
        </Flexbox.Item>
        {/* <Flexbox.Item width={'80%'}>
          <Button
            type={'transparent'}
            size={'medium'}
            onPress={async () => {
              await login();
              navigation.navigate('Root');
            }}
          >
            로그인
          </Button>
        </Flexbox.Item> */}
      </Flexbox>
    </ScreenWrapper>
  );
};

export { TitleScreen };
