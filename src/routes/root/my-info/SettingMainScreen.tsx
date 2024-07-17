import { useCallback, useContext, useState } from 'react';
import {
  Box,
  Button,
  Flexbox,
  Typography,
  Separator,
} from 'src/components/atom';
import { ButtonProps } from 'src/components/atom/Button';
import { ScreenWrapper } from 'src/components/template';
import { FeedbackModal } from './MyInfoMainScreen/content/modals/FeedbackModal';
import { LogoutModal } from './MyInfoMainScreen/content/modals/LogoutModal';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { MyInfoParamList } from '.';
import { useNavigation } from '@react-navigation/native';
import { NavigationRouterParamList } from 'src/routes';
import { UserContext } from 'src/context/user';
import { Field } from 'src/components/molecule';
import { AppPasswordContext } from 'src/context/password';

const SettingButton = ({
  children,
  onPress,
}: Pick<ButtonProps, 'onPress'> & { children: string }) => {
  return (
    <Flexbox justifyContent='flex-start'>
      <Box width={'auto'} pl={25}>
        <Button
          wide={false}
          type={'transparent'}
          size={'large'}
          onPress={onPress}
        >
          <Typography fontSize={20}>{children}</Typography>
        </Button>
      </Box>
    </Flexbox>
  );
};

const SettingMainScreen = ({
  navigation,
}: StackScreenProps<MyInfoParamList, 'SettingMain'>) => {
  /* states */
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  /* navigations */
  const signupNav =
    useNavigation<StackNavigationProp<NavigationRouterParamList, 'Sign'>>();

  /* custom hooks */
  const {
    appPasswordList: { isSetPassword, isSetBioPassword },
    setBioPassword,
    isBiometricAuth,
  } = useContext(AppPasswordContext);
  const { logout } = useContext(UserContext);

  /* functions */
  const passwordHandler = useCallback((value: boolean) => {
    if (value === true) {
      navigation.navigate('Security', { screen: 'SecuritySettingPassword' });
    } else {
      navigation.navigate('Security', {
        screen: 'SecurityUnlock',
        params: { value: 'PASSWORD' },
      });
    }
  }, []);

  const bioPasswordHandler = useCallback((value: boolean) => {
    if (value === true) {
      setBioPassword();
    } else {
      navigation.navigate('Security', {
        screen: 'SecurityUnlock',
        params: { value: 'BIO_PASSWORD' },
      });
    }
  }, []);

  const pressFeedbackDirect = useCallback(() => {
    setFeedbackModalVisible(false);
    navigation.navigate('Feedback');
  }, [navigation]);

  const onLogoutConfirm = () => {
    setLogoutModalVisible(false);
    logout();
    signupNav.reset({
      index: 0,
      routes: [{ name: 'Sign' }],
    });
  };

  return (
    <ScreenWrapper>
      <Box mb={20}>
        <Field
          labelLayout={{ flex: 1 }}
          childrenLayout={{ flex: 0.5 }}
          labelAlign='center'
          label={
            <Flexbox flexDirection='column' gap={5}>
              <Typography fontSize={20}>앱 비밀번호 사용</Typography>
              <Typography fontSize={12}>
                앱을 시작할 때 비밀 번호를 사용합니다.
              </Typography>
            </Flexbox>
          }
          name={'usePassword'}
          fieldType={'toggle'}
          value={isSetPassword}
          onChange={({ usePassword }) => passwordHandler(usePassword)}
        />
      </Box>
      {isBiometricAuth && isSetPassword && (
        <Box mb={10}>
          <Field
            labelLayout={{ flex: 1 }}
            childrenLayout={{ flex: 0.5 }}
            disabled={!isSetPassword}
            labelAlign='center'
            label={
              <Flexbox flexDirection='column' gap={5}>
                <Typography fontSize={20}>생체 정보 등록</Typography>
                <Typography fontSize={12}>
                  앱을 시작할 때 생체 인식을 사용합니다.
                </Typography>
              </Flexbox>
            }
            name={'useBioPassword'}
            fieldType={'toggle'}
            value={isSetBioPassword}
            onChange={({ useBioPassword }) => {
              bioPasswordHandler(useBioPassword);
            }}
          />
        </Box>
      )}

      <Separator width={'100%'} />

      <SettingButton onPress={() => navigation.navigate('Version')}>
        버전
      </SettingButton>
      <SettingButton onPress={() => setFeedbackModalVisible(true)}>
        피드백
      </SettingButton>
      <SettingButton onPress={() => setLogoutModalVisible(true)}>
        로그아웃
      </SettingButton>
      <FeedbackModal
        visible={feedbackModalVisible}
        onPressBack={() => setFeedbackModalVisible(false)}
        onPressAppStore={() => console.log('앱스토어')}
        onPressDirect={pressFeedbackDirect}
        onPressCancel={() => setFeedbackModalVisible(false)}
      />
      <LogoutModal
        visible={logoutModalVisible}
        onPressBack={() => setLogoutModalVisible(false)}
        onConfirm={onLogoutConfirm}
      />
    </ScreenWrapper>
  );
};

export { SettingMainScreen };
