import { useCallback, useState } from 'react';
import { Box, Flexbox, Typography } from 'src/components/atom';
import { Field } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';

const SecuritySettingMain = ({ navigation }) => {
  const [value, setValue] = useState<{
    usePassword: boolean;
    useBioPassword: boolean;
  }>({ usePassword: false, useBioPassword: false });
  const { usePassword, useBioPassword } = value;

  const changeHandler = useCallback(
    (value: Partial<{ usePassword: boolean; useBioPassword: boolean }>) => {
      setValue((prev) => ({ ...prev, ...value }));
    },
    []
  );

  const passwordChangeHandler = useCallback((value: boolean) => {
    if (value === true) {
      navigation.navigate('SecuritySettingPassword');
    }
    changeHandler({ usePassword: value });
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
          value={usePassword}
          onChange={({ usePassword }) => passwordChangeHandler(usePassword)}
        />
        <Field
          labelLayout={{ flex: 1 }}
          childrenLayout={{ flex: 0.5 }}
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
          value={useBioPassword}
          onChange={changeHandler}
        />
      </Flexbox>
    </ScreenWrapper>
  );
};

export { SecuritySettingMain };
