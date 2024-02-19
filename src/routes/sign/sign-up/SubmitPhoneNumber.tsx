import { StackScreenProps } from '@react-navigation/stack';
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
import { SignUpRouteParamList } from '.';

interface SubmitPhoneNumberProps
  extends StackScreenProps<SignUpRouteParamList, 'SubmitPhone'> {}

const SubmitPhoneNumber = ({ navigation }: SubmitPhoneNumberProps) => {
  const [state, setState] = useState<UserVerificationRequest>({ phone: '' });

  const { mutate } = useCommonMutation<
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
      navigation?.navigate('SubmitValidationCode', {
        phoneNumber: state.phone,
      });
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
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        mt={'30%'}
      >
        <Flexbox.Item mb={40}>
          <Typography fontSize={14}>
            사용하실 본인 명의의 휴대폰 번호를 입력해주세요.
          </Typography>
        </Flexbox.Item>
        <Flexbox.Item width={'80%'}>
          <Flexbox
            width={'100%'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={16}
          >
            <Flexbox.Item width={'100%'}>
              <Field
                width={'100%'}
                name={'phone'}
                fieldType={'textInput'}
                placeholder={'휴대폰 번호 입력'}
                value={state.phone}
                onChange={(value) => {
                  setState((prev) => ({ ...prev, ...value }));
                }}
                keyboardType={'number-pad'}
              />
            </Flexbox.Item>
            <Flexbox.Item width={'100%'} height={'auto'}>
              <Button
                wide={true}
                type={'normal'}
                size={'medium'}
                onPress={() => {
                  mutate(state);
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
