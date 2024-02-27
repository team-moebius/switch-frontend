import { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Typography } from 'src/components/atom';
import { ScreenWrapper, UnlockPassword } from 'src/components/template';

import { AppPasswordContext } from 'src/context/password';

import { NavigationRouterParamList } from 'src/routes';

const AppUnlock = ({
  navigation,
}: StackScreenProps<NavigationRouterParamList, 'AppUnlock'>) => {
  const { unlockPassword, unlockBioPassword, appPasswordList } =
    useContext(AppPasswordContext);

  const [password, setPassword] = useState('');

  const { isSetPassword, isSetBioPassword } = appPasswordList;

  const handlePassword = (pw: string) => {
    setPassword(pw);
  };

  useEffect(() => {
    const unlockWithBio = async () => {
      const result = await unlockBioPassword();
      result
        ? navigation?.reset({
            index: 0,
            routes: [{ name: 'Root' }],
          })
        : Alert.alert('인증에 실패했습니다.');
    };

    if (isSetPassword && isSetBioPassword) {
      unlockWithBio();
    }
  }, [isSetPassword, isSetBioPassword]);

  useEffect(() => {
    const unlockWithPassword = async () => {
      const result = await unlockPassword(password);

      if (result) {
        navigation?.reset({
          index: 0,
          routes: [{ name: 'Root' }],
        });
      } else {
        setPassword('');
        Alert.alert('비밀번호가 일치하지 않습니다.');
      }
    };

    if (password.length >= 4) {
      unlockWithPassword();
    }
  }, [password]);

  return (
    <ScreenWrapper>
      <UnlockPassword
        notice={<Typography fontSize={16}>비밀번호를 입력하세요.</Typography>}
        value={password}
        maxLength={4}
        onChange={handlePassword}
      />
    </ScreenWrapper>
  );
};

export { AppUnlock };
