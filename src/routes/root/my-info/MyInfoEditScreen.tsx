import { useEffect, useState } from 'react';
import {
  Box,
  Flexbox,
  Typography,
  Separator,
  Button,
} from 'src/components/atom';
import { Field } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';

const MyInfoEditScreen = () => {
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const certifyHandler = () => {
    alert('2차 인증');
  };

  const phoneEditHandler = () => {
    alert('휴대폰 번호 변경');
  };

  const emailEditHandler = () => {
    alert('이메일 변경');
  };

  const withdrawHandler = () => {
    alert('회원 탈퇴하기');
  };

  useEffect(() => {
    // 기존 value 할당
    setName('집오리');
    setIntroduce('제 꿈은 클립으로 집까지 바꾸는 거에요! :)');
    setPhone('01012341234');
    setEmail('');
  }, []);

  return (
    <ScreenWrapper>
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
            style={{ padding: 8 }}
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
      <Flexbox.Item padding={10} flex={1}>
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
    </ScreenWrapper>
  );
};

export { MyInfoEditScreen };
