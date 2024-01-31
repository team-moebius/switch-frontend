import { useContext, useEffect, useMemo, useState } from 'react';

import { Flexbox, Typography } from 'src/components/atom';
import { NumberPad } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { SecuritySettingParamList } from '..';
import { commonNavigationProps } from 'src/routes';
import PALETTE from 'src/assets/theme/palettes';

interface SecuritySettingPasswordProps
  extends commonNavigationProps<
    SecuritySettingParamList,
    'SecuritySettingPassword'
  > {}

const SecuritySettingPassword = ({
  navigation,
}: SecuritySettingPasswordProps) => {
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

  const infomatioinMessage = useMemo(
    () =>
      isFailtoConfirm ? (
        // 비밀번호가 일치하지 않았을 때
        <Typography fontSize={16} color={PALETTE.color.error}>
          비밀번호가 일치하지 않습니다. 다시 입력해주세요.
        </Typography>
      ) : password.length >= 4 ? (
        // 패스워드 4자리를 입력 후 비밀번호를 확인할 수 있도록 안내
        <Typography fontSize={16}>한 번 더 비밀번호를 입력하세요.</Typography>
      ) : (
        <Typography fontSize={16}>새로운 비밀번호를 입력하세요.</Typography>
      ),
    [isFailtoConfirm, password]
  );

  useEffect(() => {
    if (password.length >= 4) setIsFailtoConfirm(false);
    if (confirmPassword.length >= 4) {
      if (password === confirmPassword) {
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
      <Flexbox height={'100%'} flexDirection={'column'} alignItems={'center'}>
        <Flexbox.Item flex={1} mt={20} mb={24}>
          <Flexbox flexDirection={'row'} height={'100%'} alignItems={'center'}>
            {infomatioinMessage}
          </Flexbox>
        </Flexbox.Item>
        <Flexbox.Item flex={4}>
          <Flexbox
            height={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <NumberPad
              value={password.length >= 4 ? confirmPassword : password}
              maxLength={4}
              onChange={handlePassword}
            />
          </Flexbox>
        </Flexbox.Item>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { SecuritySettingPassword };
