import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Flexbox,
  Modal as FeedbackModal,
  Typography,
} from 'src/components/atom';
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
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = useCallback(() => {
    setModalVisible((prev) => !prev);
  }, []);

  const pressFeedbackDirect = useCallback(() => {
    setModalVisible(false);
    navigation.navigate('Feedback');
  }, [navigation]);

  return (
    <ScreenWrapper>
      <SettingButton onPress={() => navigation.navigate('Record')}>
        스위치 내역
      </SettingButton>
      <SettingButton onPress={() => navigation.navigate('Setting')}>
        스위치 설정
      </SettingButton>
      <SettingButton onPress={() => navigation.navigate('Security')}>
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
      <SettingButton onPress={handleModalOpen}>피드백</SettingButton>
      <SettingButton onPress={() => alert('로그아웃!')}>로그아웃</SettingButton>
      <FeedbackModal
        visible={modalVisible}
        onPressBack={() => setModalVisible(false)}
        backgroundColor={'#fefefe'}
        width={'70%'}
        height={'35%'}
        position={'center'}
      >
        <Flexbox
          width={'100%'}
          height={'100%'}
          margin={'auto'}
          gap={80}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Flexbox.Item>
            <Typography fontSize={14}>피드백을 어디에 남기시겠어요?</Typography>
          </Flexbox.Item>
          <Flexbox
            alignItems={'center'}
            width={'100%'}
            flexDirection={'column'}
            pt={20}
            gap={10}
          >
            <Flexbox.Item width='90%'>
              <Button
                size='medium'
                type='normal'
                onPress={() => console.log('앱스토어')}
              >
                앱스토어
              </Button>
            </Flexbox.Item>
            <Flexbox.Item width='90%'>
              <Button size='medium' type='normal' onPress={pressFeedbackDirect}>
                직접 보내기
              </Button>
            </Flexbox.Item>
            <Flexbox.Item width='90%'>
              <Button size='medium' type='cancel' onPress={handleModalOpen}>
                취소
              </Button>
            </Flexbox.Item>
          </Flexbox>
        </Flexbox>
      </FeedbackModal>
    </ScreenWrapper>
  );
};

export { SettingMainScreen };
