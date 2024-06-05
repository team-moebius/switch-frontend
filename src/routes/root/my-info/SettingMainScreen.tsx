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
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { NavigationRouterParamList } from 'src/routes';
import { UserContext } from 'src/context/user';

const SettingButton = ({
  children,
  onPress,
}: Pick<ButtonProps, 'onPress'> & { children: string }) => {
  return (
    <Flexbox justifyContent='flex-start'>
      <Box width={'auto'}>
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
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const { logout } = useContext(UserContext);

  const signupNav =
    useNavigation<
      CompositeNavigationProp<
        StackNavigationProp<NavigationRouterParamList, 'Sign'>,
        StackNavigationProp<MyInfoParamList, 'SettingMain'>
      >
    >();

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
      <SettingButton onPress={() => navigation.navigate('Security')}>
        보안 설정
      </SettingButton>

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
