import { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Typography } from 'src/components/atom';
import { ScreenWrapper, UnlockPassword } from 'src/components/template';

import { AppPasswordContext } from 'src/context/password';

import { SecuritySettingParamList } from '..';

interface SecurityUnlockProps
  extends StackScreenProps<SecuritySettingParamList, 'SecurityUnlock'> {}

const SecurityUnlock = ({ navigation, route }: SecurityUnlockProps) => {
  const {
    unlockPassword,
    unlockBioPassword,
    deletePassword,
    deleteBioPassword,
    appPasswordList: { isSetPassword, isSetBioPassword },
  } = useContext(AppPasswordContext);
  const [password, setPassword] = useState('');

  const { value: unlockType } = route.params;

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  useEffect(() => {
    if (unlockType === 'BIO_PASSWORD') {
      const unlockForDeleteBio = async () => {
        const result = await unlockBioPassword();

        if (result) {
          deleteBioPassword();
        } else {
          Alert.alert('인증에 실패했습니다.');
        }

        navigation.goBack();
      };

      if (isSetPassword && isSetBioPassword) {
        unlockForDeleteBio();
      }
    }
  }, [unlockType, isSetPassword, isSetBioPassword]);

  useEffect(() => {
    if (unlockType === 'PASSWORD') {
      const unlockForDeletePassword = async () => {
        const result = await unlockPassword(password);

        if (result) {
          deletePassword();
        } else {
          Alert.alert('비밀번호가 일치하지 않습니다.');
        }

        navigation.goBack();
      };

      if (password.length >= 4) {
        unlockForDeletePassword();
      }
    }
  }, [unlockType, password]);

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

export { SecurityUnlock, SecurityUnlockProps };
