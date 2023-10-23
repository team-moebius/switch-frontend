import { useState } from 'react';
import { Box, Flexbox, Typography } from 'src/components/atom';
import { NumberPad } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';

const SecuritySettingPassword = () => {
  const [password, setPassword] = useState<string>('');
  return (
    <ScreenWrapper>
      <Flexbox height={'100%'} flexDirection={'column'} alignItems={'center'}>
        <Flexbox.Item flex={1} mt={20} mb={24}>
          <Flexbox flexDirection={'row'} height={'100%'} alignItems={'center'}>
            <Typography fontSize={16}>새로운 비밀번호를 입력하세요.</Typography>
          </Flexbox>
        </Flexbox.Item>
        <Flexbox.Item flex={4}>
          <Flexbox
            height={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <NumberPad value={password} maxLength={4} onChange={setPassword} />
          </Flexbox>
        </Flexbox.Item>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { SecuritySettingPassword };
