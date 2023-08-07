import React, { useContext } from 'react';

import { Flexbox, Typography } from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template/ScreenWrapper';
import { ThemeContext } from 'src/context/theme';

const SplashScreen = () => {
  const { color } = useContext(ThemeContext);

  return (
    <ScreenWrapper>
      <Flexbox
        top={'50%'}
        position={'absolute'}
        justifyContent={'center'}
        width={'100%'}
        alignItems={'center'}
      >
        <Typography fontWeight={'300'} fontSize={40} color={color.neutral[300]}>
          Switch
        </Typography>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { SplashScreen };
