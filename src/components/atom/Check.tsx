import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const typeStyle = {
  warning: { color: 'red' },
  normal: { color: 'orange' },
  info: { color: 'blue' },
} as const;

const boxTypeStyle = StyleSheet.create({
  square: {
    borderRadius: 0,
  },
  circle: {},
});

interface CheckProps {
  type?: keyof typeof typeStyle;
  boxType?: keyof typeof boxTypeStyle;
  size?: number;
  checked?: boolean;
  onPress?: () => void;
  innerComponent?: FunctionComponent;
}

const Check = ({
  boxType = 'square',
  type = 'normal',
  checked,
  size = 25,
  innerComponent,
  ...props
}: CheckProps) => {
  return (
    <BouncyCheckbox
      {...props}
      style={{ width: size }}
      isChecked={checked}
      disableBuiltInState={true}
      fillColor={typeStyle[type].color}
      innerIconStyle={boxTypeStyle[boxType]}
      iconStyle={boxTypeStyle[boxType]}
      ImageComponent={innerComponent}
    />
  );
};

export { Check, CheckProps, typeStyle };
