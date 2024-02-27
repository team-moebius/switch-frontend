import { useEffect, useState } from 'react';
import {
  Box,
  Flexbox,
  Typography,
  Button,
  Separator,
} from 'src/components/atom';

import { Field } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { KeyboardScreenWrapper } from 'src/components/template/KeyboardScreenWrapper';

const MyInfoEditScreen = ({ navigation, route }) => {
  const {
    params: { userInfo },
  } = route;

  const [name, setName] = useState(userInfo.nickname);
  const [introduce, setIntroduce] = useState(userInfo.introduction);
  const [phone, setPhone] = useState(userInfo.phone);
  const [email, setEmail] = useState(userInfo.email);

  const certifyHandler = () => {
    console.debug('2차 인증');
  };

  const phoneEditHandler = () => {
    console.debug('휴대폰 번호 변경');
  };

  const emailEditHandler = () => {
    console.debug('이메일 변경');
  };

  const withdrawHandler = () => {
    navigation.navigate('Withdraw');
  };

  return (
    <KeyboardScreenWrapper>
      <Box>
        <Separator />
        <Flexbox alignItems='center'>
          <Field
            fieldType={'textInput'}
            label={
              <Box width={80}>
                <Typography fontSize={20}>이름</Typography>
              </Box>
            }
            onChange={(value) => {
              setName(value.name as string);
            }}
            value={name}
            name='name'
            childrenLayout={{ flex: 1, width: '100%' }}
            labelLayout={{ flex: 0.3, width: '30%' }}
            width={'100%'}
            placeholder='이름을 입력해주세요.'
            style={{ borderWidth: 0, color: '#000000' }}
          />
        </Flexbox>
        <Separator />
        <Flexbox alignItems='center'>
          <Field
            fieldType={'textarea'}
            label={
              <Box width={80}>
                <Typography fontSize={20}>소개글</Typography>
              </Box>
            }
            style={{ padding: 8, borderWidth: 0 }}
            onChange={(value) => {
              setIntroduce(value.introduce as string);
            }}
            value={introduce}
            name='introduce'
            childrenLayout={{ flex: 1, width: '100%' }}
            labelLayout={{ flex: 0.3, width: '30%' }}
            width={'100%'}
            placeholder='소개글을 입력해주세요.'
          />
        </Flexbox>
        <Separator />
      </Box>
      <Flexbox.Item padding={10} flex={1} mb={'40%'}>
        <Box mb={20}>
          <Box width={100} mb={10}>
            <Button type={'normal'} size={'medium'} onPress={certifyHandler}>
              2차 인증
            </Button>
          </Box>
          <Typography fontSize={15}>
            {`실명과 휴대폰 번호를 인증합니다. 나의 프로필에 '인증 완료' 내역이 표시됩니다.`}
          </Typography>
        </Box>
        <Box mb={20}>
          <Flexbox alignItems='center'>
            <Flexbox.Item flex={1}>
              <Typography fontSize={20}>휴대폰 번호</Typography>
            </Flexbox.Item>
            <Flexbox.Item flex={0.3}>
              <Button
                type={'transparent'}
                size={'medium'}
                onPress={phoneEditHandler}
              >
                {phone === '' ? '등록하기' : '변경하기'}
              </Button>
            </Flexbox.Item>
          </Flexbox>
          <Typography fontSize={15}>{phone === '' ? '-' : phone}</Typography>
        </Box>
        <Box>
          <Flexbox alignItems='center'>
            <Flexbox.Item flex={1}>
              <Typography fontSize={20}>이메일 주소</Typography>
            </Flexbox.Item>
            <Flexbox.Item flex={0.3}>
              <Button
                type={'transparent'}
                size={'medium'}
                onPress={emailEditHandler}
              >
                {email === '' ? '등록하기' : '변경하기'}
              </Button>
            </Flexbox.Item>
          </Flexbox>
          <Typography fontSize={15}>{email === '' ? '-' : email}</Typography>
        </Box>
      </Flexbox.Item>

      <Button type={'transparent'} size={'medium'} onPress={withdrawHandler}>
        회원 탈퇴하기
      </Button>
    </KeyboardScreenWrapper>
  );
};

export { MyInfoEditScreen };
