import { Box, Button, Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

import { StackScreenProps } from '@react-navigation/stack';
import { WithdrawParamList } from '.';

const WithdrawInfoScreen = ({
  navigation,
}: StackScreenProps<WithdrawParamList, 'WithdrawInfo'>) => {
  const onClickHandler = () => {
    navigation.navigate('WithdrawFeedback');
  };
  return (
    <ScreenWrapper>
      <Flexbox.Item flex={1}>
        <Box mb={20}>
          <Typography fontSize={20}>스위치를 탈퇴하시면</Typography>
        </Box>
        <Flexbox flexDirection='column' gap={10}>
          <Flexbox columnGap={10}>
            <Typography fontSize={15}>⏺</Typography>
            <Typography fontSize={15}>
              회원 프로필이 사라지며, 복구가 불가능 합니다.
            </Typography>
          </Flexbox>
          <Flexbox columnGap={10}>
            <Typography fontSize={15}>⏺</Typography>
            <Typography fontSize={15}>
              참여중이던 모든 채팅에서 나가게 되며, 대화방에서 공유된 모든
              정보가 즉시 삭제됩니다.
            </Typography>
          </Flexbox>
          <Flexbox columnGap={10}>
            <Typography fontSize={15}>⏺</Typography>
            <Typography fontSize={15}>
              즐겨찾기 및 차단 목록이 삭제되며, 스위치를 재가입해도 복구되지
              않습니다.
            </Typography>
          </Flexbox>
          <Flexbox columnGap={10}>
            <Typography fontSize={15}>⏺</Typography>
            <Typography fontSize={15}>
              스위치 재가입은 30일 후 가능합니다.
            </Typography>
          </Flexbox>
        </Flexbox>
      </Flexbox.Item>
      <Button type={'normal'} size={'large'} onPress={onClickHandler}>
        다음
      </Button>
    </ScreenWrapper>
  );
};

export { WithdrawInfoScreen };
