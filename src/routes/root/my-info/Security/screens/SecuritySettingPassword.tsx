import { useContext, useEffect, useMemo, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { Typography } from 'src/components/atom';
import { ScreenWrapper, UnlockPassword } from 'src/components/template';

import { AppPasswordContext } from 'src/context/password';

import { SecuritySettingParamList } from '..';
import PALETTE from 'src/assets/theme/palettes';

const SecuritySettingPassword = ({
  navigation,
}: StackScreenProps<SecuritySettingParamList, 'SecuritySettingPassword'>) => {
  const { setPassword: setExpoSecurity } = useContext(AppPasswordContext);

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isFailtoConfirm, setIsFailtoConfirm] = useState(false);

  const handlePassword = (value: string) => {
    if (value === 'reset') {
      // 리셋버튼을 누르면 처음부터 다시 입력할 수 있도록
      setIsFailtoConfirm(false);
      setConfirmPassword('');
      setPassword('');
    } else if (password.length >= 4) {
      // 패스워드 4자리를 입력 후 비밀번호 확인을 입력할 수 있도록 안내 문구가 다시 노출될 수 있게 하기
      isFailtoConfirm ?? setIsFailtoConfirm(false);
      setConfirmPassword(`${value}`);
    } else {
      setPassword(`${value}`);
    }
  };

  const errorMessage = isFailtoConfirm && (
    <Typography fontSize={16} color={PALETTE.color.error}>
      비밀번호가 일치하지 않습니다. 다시 입력해주세요.
    </Typography>
  );

  const instructionMessage =
    password.length >= 4 ? (
      <Typography fontSize={16}>한 번 더 비밀번호를 입력하세요.</Typography>
    ) : (
      <Typography fontSize={16}>새로운 비밀번호를 입력하세요.</Typography>
    );

  const validationMessage = errorMessage || instructionMessage;

  useEffect(() => {
    if (password.length >= 4) setIsFailtoConfirm(false);
    if (confirmPassword.length >= 4) {
      if (password === confirmPassword) {
        setExpoSecurity(password);
        navigation.navigate('SecuritySettingMain');
      } else {
        setIsFailtoConfirm(true);
        setPassword('');
        setConfirmPassword('');
      }
    }
  }, [password, confirmPassword]);

  return (
    <ScreenWrapper>
      <UnlockPassword
        value={password.length >= 4 ? confirmPassword : password}
        maxLength={4}
        onChange={handlePassword}
        notice={validationMessage}
      />
    </ScreenWrapper>
  );
};

export { SecuritySettingPassword };
