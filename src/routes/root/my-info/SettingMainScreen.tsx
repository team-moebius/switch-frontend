import { Box, Button, Flexbox, Typography } from 'src/components/atom';
import { ButtonProps } from 'src/components/atom/Button';
import { ScreenWrapper } from 'src/components/template';

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

const SettingMainScreen = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <SettingButton onPress={() => navigation.navigate('Record')}>
        스위치 내역
      </SettingButton>
      <SettingButton onPress={() => navigation.navigate('Setting')}>
        스위치 설정
      </SettingButton>
      <SettingButton onPress={() => navigation.navigate('/security-setting')}>
        보안 설정
      </SettingButton>
      {/* 은지님이 만든 separator로 바꿔주기 */}
      <Box
        mb={10}
        mt={10}
        height={1}
        width={'100%'}
        backgroundColor='#000000'
      />
      <SettingButton onPress={() => navigation.navigate('Version')}>
        버전
      </SettingButton>
      <SettingButton onPress={() => navigation.navigate('Feedback')}>
        피드백
      </SettingButton>
      <SettingButton onPress={() => alert('로그아웃!')}>로그아웃</SettingButton>
    </ScreenWrapper>
  );
};

export { SettingMainScreen };
