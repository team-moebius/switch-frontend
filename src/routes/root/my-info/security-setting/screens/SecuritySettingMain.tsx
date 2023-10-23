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
      navigation.navigate('/security-setting/password-setting');
    }
    changeHandler({ usePassword: value });
  }, []);

  console.debug('?', value);
  return (
    <ScreenWrapper>
      <Flexbox flexDirection={'column'} gap={48}>
        <Box>
          <Field
            label={'앱 비밀번호 사용'}
            name={'usePassword'}
            fieldType={'toggle'}
            value={usePassword}
            onChange={({ usePassword }) => passwordChangeHandler(usePassword)}
          />
          <Box width={'100%'}>
            <Typography fontSize={12}>
              앱을 켤 때 비밀 번호를 사용합니다.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Field
            label={'생체 정보 등록'}
            name={'useBioPassword'}
            fieldType={'toggle'}
            value={useBioPassword}
            onChange={changeHandler}
          />
          <Box width={'100%'}>
            <Typography fontSize={12}>
              앱을 켤 때 비밀 번호를 사용합니다.
            </Typography>
          </Box>
        </Box>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { SecuritySettingMain };
