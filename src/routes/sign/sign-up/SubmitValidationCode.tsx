import { useContext, useState } from 'react';
import { Button, Flexbox, Typography } from 'src/components/atom';
import { Field } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';

import { useCommonMutation } from 'src/hooks/useCommonMutation';
import { TOKEN, USER_ID, expoSecureStore } from 'src/common/secureStore';
import { UserContext } from 'src/context/user';

import {
  LoginRequest,
  LoginResponse,
  UserVerificationRequest,
  UserVerificationResponse,
} from '@team-moebius/api-typescript';
import { UserApi } from 'src/api';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { SignUpRouteParamList } from '.';
import { NavigationRouterParamList } from 'src/routes';

const SubmitValidationCode = ({
  route,
}: StackScreenProps<SignUpRouteParamList, 'SubmitValidationCode'>) => {
  const [state, setState] = useState<LoginRequest>({
    phone: route.params.phoneNumber,
    verifiedCode: '',
  });
  const { login } = useContext(UserContext);
  const navigation =
    useNavigation<StackNavigationProp<NavigationRouterParamList, 'Root'>>();

  const { mutate: validationCodeMutate } = useCommonMutation<
    LoginResponse,
    LoginRequest
  >({
    api: UserApi.login,
    async onSuccess(data, variables) {
      console.debug('[UserApi.login]on success:', data, variables);

      if (data.jwtToken) {
        await expoSecureStore.setToken(TOKEN, data.jwtToken.split(' ')[1]);
        await expoSecureStore.setToken(USER_ID, `${data.userId}`);
      }

      login();

      navigation.reset({
        index: 0,
        routes: [{ name: 'Root' }],
      });
    },
    onError(error, variables) {
      console.debug('error', error, variables);
    },
  });

  const { mutate: submitPhoneMutate } = useCommonMutation<
    UserVerificationResponse,
    UserVerificationRequest
  >({
    api: UserApi.requestUserVerification,
    onSuccess(data, variables) {
      console.debug(
        '[UserApi.requestUserVerification] on success:',
        data,
        variables
      );
    },
    onError(error, variables) {
      console.debug('error', error, variables);
    },
  });

  return (
    <ScreenWrapper>
      <Flexbox
        width={'100%'}
        padding={'10%'}
        alignItems={'center'}
        flexDirection={'column'}
        mt={'30%'}
      >
        <Flexbox.Item mb={40}>
          <Typography fontSize={14}>
            휴대폰 번호로 전송된 인증 코드를 입력해주세요.
          </Typography>
        </Flexbox.Item>
        <Flexbox.Item mb={50}>
          <Flexbox width={'80%'} flexDirection={'column'} gap={16}>
            <Field
              width={'100%'}
              name={'phoneNumber'}
              disabled={true}
              fieldType={'textInput'}
              placeholder={'휴대폰 번호 입력'}
              value={state.phone}
              onChange={() => {
                console.debug('Can not change');
              }}
              keyboardType='number-pad'
            />
            <Field
              width={'100%'}
              name={'verifiedCode'}
              fieldType={'textInput'}
              placeholder={'인증 코드 입력'}
              value={state.verifiedCode}
              onChange={(value) => {
                setState((prev) => ({ ...prev, ...value }));
              }}
              keyboardType='number-pad'
            />
          </Flexbox>
        </Flexbox.Item>
        <Flexbox.Item width={'80%'}>
          <Flexbox
            width={'100%'}
            height={'100%'}
            flexDirection={'column'}
            gap={8}
          >
            <Flexbox.Item width={'100%'}>
              <Button
                wide
                type={'normal'}
                size={'medium'}
                onPress={() => {
                  validationCodeMutate(state);
                }}
              >
                가입
              </Button>
            </Flexbox.Item>
            <Flexbox.Item width={'100%'}>
              <Button
                wide
                type={'transparent'}
                size={'medium'}
                onPress={() => {
                  submitPhoneMutate({ phone: state.phone });
                }}
              >
                코드재전송
              </Button>
            </Flexbox.Item>
          </Flexbox>
        </Flexbox.Item>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { SubmitValidationCode };
