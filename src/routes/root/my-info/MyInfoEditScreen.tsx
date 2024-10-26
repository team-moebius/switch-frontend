import { useContext, useState, useLayoutEffect } from 'react';
import { Alert } from 'react-native';

import {
  Box,
  Flexbox,
  Typography,
  Button,
  Separator,
} from 'src/components/atom';
import { Field, ScreenHeader } from 'src/components/molecule';
import { KeyboardScreenWrapper } from 'src/components/template/KeyboardScreenWrapper';

import { useCommonMutation } from 'src/hooks/useCommonMutation';
import { UserContext } from 'src/context/user';

import { useQueryClient } from 'react-query';
import { UserApi } from 'src/api';

import { StackHeaderProps, StackScreenProps } from '@react-navigation/stack';

import {
  UserInfoResponse,
  UserUpdateRequest,
} from '@team-moebius/api-typescript';
import { MyInfoParamList } from '.';
import { COLORS } from 'src/assets/theme/base';

const MyInfoEditScreen = ({
  navigation,
  route,
}: StackScreenProps<MyInfoParamList, 'MyInfoEdit'>) => {
  const { userId } = useContext(UserContext);
  const queryClient = useQueryClient();

  const { mutate } = useCommonMutation<UserInfoResponse, UserUpdateRequest>({
    api: (userData: UserUpdateRequest) =>
      UserApi.updateUserInfo(Number(userId), userData),
    onSuccess(data, variables) {
      console.debug(
        '\n\n\n ✅ myInfoEdit_userApi_updateUserInfo data ✅ \n\n',
        data,
        variables
      );
      queryClient.invalidateQueries(['myInfoMain_userApi_getUserInfo']);
      navigation.goBack();
    },
    onError(error, variables) {
      console.debug(
        '\n\n\n 🚨 myInfoEdit_userApi_updateUserInfo error 🚨 \n\n',
        error,
        variables
      );
    },
  });

  const {
    params: { userInfo },
  } = route;

  const [name, setName] = useState(userInfo?.nickname ?? '');
  const [introduce, setIntroduce] = useState(userInfo?.introduction ?? '');
  const [phone, setPhone] = useState(userInfo?.phone ?? '');
  const [email, setEmail] = useState(userInfo?.email ?? '');

  const handleEdit = () => {
    const newInfo = {
      nickname: name,
      introduction: introduce,
    };
    mutate(newInfo);
  };

  const certifyHandler = () => {
    // alert('2차 인증');
    Alert.alert('알림', '추후 추가될 기능입니다 :)');
  };

  const phoneEditHandler = () => {
    // alert('휴대폰 번호 변경');
    Alert.alert('알림', '추후 추가될 기능입니다 :)');
  };

  const emailEditHandler = () => {
    // alert('이메일 변경');
    Alert.alert('알림', '추후 추가될 기능입니다 :)');
  };

  const withdrawHandler = () => {
    return navigation.navigate('Withdraw');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props: StackHeaderProps) => {
        return (
          <ScreenHeader
            {...props}
            center={'내 정보 편집하기'}
            right={
              <Flexbox width={'100%'} justifyContent={'flex-end'}>
                <Button
                  size={'medium'}
                  type={'transparent'}
                  onPress={handleEdit}
                >
                  완료
                </Button>
              </Flexbox>
            }
          />
        );
      },
    });
  });

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
            style={{ borderWidth: 0, color: COLORS.text }}
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
