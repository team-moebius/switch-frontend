import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface CheckboxProps {
  type?: keyof typeof typeStyle;
  boxType?: keyof typeof boxTypeStyle;
  size?: number;
  checked?: boolean;
  onPress?: () => void;
  innerComponent?: FunctionComponent;
}
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
const Checkbox = ({
  boxType = 'square',
  type = 'normal',
  checked,
  innerComponent,
  ...props
}: CheckboxProps) => {
  return (
    <BouncyCheckbox
      {...props}
      isChecked={checked}
      disableBuiltInState={true}
      fillColor={typeStyle[type].color}
      innerIconStyle={boxTypeStyle[boxType]}
      iconStyle={boxTypeStyle[boxType]}
      ImageComponent={innerComponent}
    />
  );
};

export { CheckboxProps, typeStyle };

export default Checkbox;
