import { useCallback, useContext } from 'react';
import { Flexbox, Typography } from 'src/components/atom';
import { Field } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { SecuritySettingParamList } from '..';

import { AppPasswordContext } from 'src/context/password';
import { StackScreenProps } from '@react-navigation/stack';

interface SecuritySettingMainProps
  extends StackScreenProps<SecuritySettingParamList, 'SecuritySettingMain'> {}

const SecuritySettingMain = ({ navigation }: SecuritySettingMainProps) => {
  const {
    appPasswordList: { isSetPassword, isSetBioPassword },
    setBioPassword,
    isBiometricAuth,
  } = useContext(AppPasswordContext);

  const passwordHandler = useCallback((value: boolean) => {
    if (value === true) {
      navigation.navigate('SecuritySettingPassword');
    } else {
      navigation.navigate('SecurityUnlock', { value: 'PASSWORD' });
    }
  }, []);

  const bioPasswordHandler = useCallback((value: boolean) => {
    if (value === true) {
      setBioPassword();
    } else {
      navigation.navigate('SecurityUnlock', { value: 'BIO_PASSWORD' });
    }
  }, []);

  return (
    <ScreenWrapper>
      <Flexbox flexDirection={'column'} gap={48}>
        <Field
          labelLayout={{ flex: 1 }}
          childrenLayout={{ flex: 0.5 }}
          labelAlign='center'
          label={
            <Flexbox flexDirection='column' gap={5}>
              <Typography fontSize={20}>앱 비밀번호 사용</Typography>
              <Typography fontSize={12}>
                앱을 시작할 때 비밀 번호를 사용합니다.
              </Typography>
            </Flexbox>
          }
          name={'usePassword'}
          fieldType={'toggle'}
          value={isSetPassword}
          onChange={({ usePassword }) => passwordHandler(usePassword)}
        />
        {isBiometricAuth && isSetPassword && (
          <Field
            labelLayout={{ flex: 1 }}
            childrenLayout={{ flex: 0.5 }}
            disabled={!isSetPassword}
            labelAlign='center'
            label={
              <Flexbox flexDirection='column' gap={5}>
                <Typography fontSize={20}>생체 정보 등록</Typography>
                <Typography fontSize={12}>
                  앱을 시작할 때 생체 인식을 사용합니다.
                </Typography>
              </Flexbox>
            }
            name={'useBioPassword'}
            fieldType={'toggle'}
            value={isSetBioPassword}
            onChange={({ useBioPassword }) => {
              bioPasswordHandler(useBioPassword);
            }}
          />
        )}
      </Flexbox>
    </ScreenWrapper>
  );
};

export { SecuritySettingMain };
