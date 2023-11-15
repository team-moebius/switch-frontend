import { Button, Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

const EditMyInfoScreen = ({ navigation }) => {
  return (
    <ScreenWrapper>
      {/* write contents */}
      <Flexbox
        height={'100%'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Flexbox.Item>
          <Typography fontSize={12}>EditMyInfo</Typography>
        </Flexbox.Item>
        <Flexbox.Item>
          <Button
            wide
            type={'transparent'}
            size={'medium'}
            onPress={() => {
              navigation.navigate('Withdraw');
            }}
          >
            회원탈퇴하기
          </Button>
        </Flexbox.Item>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { EditMyInfoScreen };
