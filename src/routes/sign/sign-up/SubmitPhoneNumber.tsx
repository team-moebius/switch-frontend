import {
  UserVerificationRequest,
  UserVerificationResponse,
} from '@team-moebius/api-typescript';
import { useState } from 'react';

import { UserApi } from 'src/api';
import { Button, Flexbox, Typography } from 'src/components/atom';
import { Field } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { useCommonMutation } from 'src/hooks/useCommomMutation';

const SubmitPhoneNumber = ({ navigation }) => {
  const [state, setState] = useState<UserVerificationRequest>({ phone: '' });

  const { mutate, data, isLoading, isError } = useCommonMutation<
    UserVerificationResponse,
    UserVerificationRequest
  >({
    api: UserApi.requestUserVerification,
    onSuccess(data, variables) {
      console.debug('on success:', data, variables);
    },
    onError(error, variables) {
      console.debug('error', error, variables);
    },
  });

  console.debug('result:', data, isLoading, isError);
  return (
    <ScreenWrapper>
      <Flexbox
        padding={'10%'}
        alignItems={'center'}
        flexDirection={'column'}
        mt={'30%'}
      >
        <Flexbox.Item mb={40}>
          <Typography fontSize={14}>
            사용하실 본인 명의의 휴대폰 번호를 입력해주세요.
          </Typography>
        </Flexbox.Item>
        <Flexbox.Item>
          <Flexbox
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={16}
          >
            <Flexbox.Item>
              <Field
                width={'100%'}
                name={'phone'}
                fieldType={'textInput'}
                placeholder={'휴대폰 번호 입력'}
                value={state.phone}
                onChange={(value) => {
                  setState((prev) => ({ ...prev, ...value }));
                  // console.debug('change phone number');
                }}
              />
            </Flexbox.Item>
            <Flexbox.Item>
              <Button
                wide
                type={'normal'}
                size={'middle'}
                onPress={() => {
                  mutate(state);
                  // navigation?.navigate('SubmitValidationCode');
                }}
              >
                다음
              </Button>
            </Flexbox.Item>
          </Flexbox>
        </Flexbox.Item>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { SubmitPhoneNumber };
