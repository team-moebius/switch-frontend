import { useState } from 'react';
import {
  Box,
  Button,
  Flexbox,
  Select,
  Textarea,
  Typography,
} from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

const selectType = ['기타', '대체 플렛폼 이용', '스위치 간 불만족'] as const;

const WithdrawFeedbackScreen = ({ navigation }) => {
  const [option, setOption] = useState<(typeof selectType)[number]>('기타');

  const onSelectHandler = (value) => {
    setOption(value);
  };

  const onSubmitHandler = () => {
    navigation.navigate('Farewell');
  };

  return (
    <ScreenWrapper>
      <Flexbox.Item flex={1}>
        <Flexbox gap={10} flexDirection='column'>
          <Typography fontSize={20}>
            스위치를 탈퇴하시려는 이유가 있을까요?
          </Typography>
          <Box>
            <Select
              options={selectType}
              onPressItem={onSelectHandler}
              value={option}
            />
          </Box>
          <Textarea placeholder='이유를 입력해주세요.' />
        </Flexbox>
      </Flexbox.Item>
      <Button type={'normal'} size={'large'} onPress={onSubmitHandler}>
        제출하기
      </Button>
    </ScreenWrapper>
  );
};

export { WithdrawFeedbackScreen };
