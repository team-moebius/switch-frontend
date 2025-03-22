import { useContext } from 'react';

import { Flexbox, Typography } from 'src/components/atom';
import { ThemeContext } from 'src/context/theme';

const SplashScreen = () => {
  const { color } = useContext(ThemeContext);

  return (
    <Flexbox
      justifyContent={'center'}
      width={'100%'}
      height={'100%'}
      alignItems={'center'}
      backgroundColor={color.neutral.white}
    >
      <Typography fontWeight={'300'} fontSize={40} color={color.neutral.black}>
        Switch
      </Typography>
    </Flexbox>
  );
};

export { SplashScreen };
