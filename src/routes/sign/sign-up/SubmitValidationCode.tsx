import { LoginRequest, LoginResponse } from '@team-moebius/api-typescript';
import { useState } from 'react';
import { UserApi } from 'src/api';
import { Button, Flexbox, Typography } from 'src/components/atom';
import { Field } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { useCommonMutation } from 'src/hooks/useCommomMutation';

const SubmitValidationCode = ({ navigation, route }) => {
  const [state, setState] = useState<LoginRequest>({
    phone: route?.params?.phoneNumber,
    verifiedCode: '',
  });

  const { mutate } = useCommonMutation<LoginResponse, LoginRequest>({
    api: UserApi.login,
    onSuccess(data, variables) {
      console.debug('[UserApi.login]on success:', data, variables);
      navigation?.navigate('Home');
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
                  mutate(state);
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
                  alert('코드 재전송');
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
