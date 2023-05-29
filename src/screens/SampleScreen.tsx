import React from 'react';
import { Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

const SampleScreen = () => {
  return (
    <ScreenWrapper>
      <Flexbox
        width={'100%'}
        height={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography>샘플 화면</Typography>
      </Flexbox>
    </ScreenWrapper>
  );
};
export { SampleScreen };
