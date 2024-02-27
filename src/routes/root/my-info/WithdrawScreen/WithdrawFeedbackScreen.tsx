import { useContext, useState } from 'react';

import {
  Box,
  Button,
  Flexbox,
  Select,
  Textarea,
  Typography,
} from 'src/components/atom';

import { UserContext } from 'src/context/user';
import { useCommonMutation } from 'src/hooks/useCommonMutation';

import {
  APP_BIO_PASSWORD,
  APP_PASSWORD,
  TOKEN,
  USER_ID,
  expoSecureStore,
} from 'src/common/secureStore';
import { UserApi } from 'src/api';

import { WithdrawParamList } from '.';
import { StackScreenProps } from '@react-navigation/stack';
import { UserWithdrawalRequest } from '@team-moebius/api-typescript';
import { KeyboardScreenWrapper } from 'src/components/template/KeyboardScreenWrapper';

const withdrawOption = ['대체 플렛폼 이용', '스위치 간 불만족', '기타'];
type WithdrawType = '대체 플렛폼 이용' | '스위치 간 불만족' | '기타';
interface MutationType {
  userId: number;
  option: WithdrawType;
  reason: string;
}

const withdrawFeedbackMutation = (params: MutationType) => {
  const { userId, option, reason } = params;
  const combineOptRes: UserWithdrawalRequest = {
    withdrawalReason: `${option} - ${reason}`,
  };
  return UserApi.withdrawUser(userId, combineOptRes);
};

const WithdrawFeedbackScreen = ({
  navigation,
}: StackScreenProps<WithdrawParamList, 'WithdrawFeedback'>) => {
  const { userId } = useContext(UserContext);

  const { mutate: withdrawMutate } = useCommonMutation<string, MutationType>({
    api: withdrawFeedbackMutation,
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

  const [option, setOption] = useState<WithdrawType>('대체 플렛폼 이용');
  const [reason, setReason] = useState('');

  const onSelectHandler = (value: string | number) => {
    setOption(value as WithdrawType);
  };

  function onHandleReason(value: string) {
    setReason(value);
  }

  const onSubmitHandler = () => {
    if (!userId) return;
    const params: MutationType = {
      userId: Number(userId),
      option,
      reason,
    };
    withdrawMutate(params);
    navigation.navigate('Farewell');

    expoSecureStore.deleteToken(TOKEN);
    expoSecureStore.deleteToken(USER_ID);
    expoSecureStore.deleteToken(APP_PASSWORD);
    expoSecureStore.deleteToken(APP_BIO_PASSWORD);
  };

  return (
    <KeyboardScreenWrapper>
      <Flexbox.Item flex={1} mb={'10%'}>
        <Flexbox gap={10} flexDirection='column'>
          <Typography fontSize={20}>
            스위치를 탈퇴하시려는 이유가 있을까요?
          </Typography>
          <Box>
            <Select
              options={withdrawOption}
              onPressItem={onSelectHandler}
              value={option}
            />
          </Box>
          <Textarea
            placeholder='이유를 입력해주세요.'
            onChangeText={onHandleReason}
            value={reason}
          />
        </Flexbox>
      </Flexbox.Item>
      <Button type={'normal'} size={'large'} onPress={onSubmitHandler}>
        제출하기
      </Button>
    </KeyboardScreenWrapper>
  );
};

export { WithdrawFeedbackScreen };
