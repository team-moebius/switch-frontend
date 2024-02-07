import { useContext, useState } from 'react';
import { UserApi } from 'src/api';
import {
  Box,
  Button,
  Flexbox,
  Select,
  Textarea,
  Typography,
} from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';
import { UserContext } from 'src/context/user';
import { useCommonMutation } from 'src/hooks/useCommomMutation';

const selectType = ['기타', '대체 플렛폼 이용', '스위치 간 불만족'];

const WithdrawFeedbackScreen = ({ navigation }) => {
  const { user: userId } = useContext(UserContext);

  const { mutate: withdrawMutate } = useCommonMutation<string, number>({
    api: (userId: number) => UserApi.withdrawUser(userId),
    onSuccess(data, varaiables) {
      console.debug(
        '\n\n\n ✅ MyInfoEdit_UserApi_withdrawUser data ✅ \n\n',
        data,
        varaiables
      );
    },
    onError(error, varaiables) {
      console.debug(
        '\n\n\n 🚨 MyInfoEdit_UserApi_withdrawUser error 🚨 \n\n',
        error,
        varaiables
      );
    },
  });

  const [option, setOption] = useState('기타');

  const onSelectHandler = (value) => {
    setOption(value);
  };

  const onSubmitHandler = () => {
    withdrawMutate(userId as unknown as number);
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
