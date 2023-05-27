import React from 'react';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Box } from './Box';
import { CheckProps, typeStyle } from './Check';

type RadioProps = Omit<CheckProps, 'boxType'>;

const Radio = ({
  type = 'normal',
  size = 25,
  checked,
  ...props
}: RadioProps) => {
  return (
    <BouncyCheckbox
      {...props}
      style={{ width: size }}
      size={size}
      isChecked={checked}
      disableBuiltInState={true}
      fillColor={'white'}
      iconStyle={{ borderColor: typeStyle[type].color, borderWidth: 2 }}
      ImageComponent={() => (
        <Box
          width={size * 0.5}
          height={size * 0.5}
          borderRadius={'50%'}
          backgroundColor={checked ? typeStyle[type].color : 'white'}
        >
          {' '}
        </Box>
      )}
    />
  );
};
export { Radio, RadioProps };
