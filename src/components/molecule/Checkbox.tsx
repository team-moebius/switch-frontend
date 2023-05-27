import React from 'react';
import { Check, CheckProps } from '../atom/Check';
import { WithLabel } from '../template';
import { WithLabelProps } from '../template/WithLabel';

interface CheckboxProps extends CheckProps, WithLabelProps {}

const Checkbox = ({
  labelPosition = 'right',
  labelAlign = 'left',
  width,
  height,
  label,
  onPress,
  ...props
}: CheckboxProps) => {
  return (
    <WithLabel
      onPress={onPress}
      width={width}
      height={height}
      labelPosition={labelPosition}
      labelAlign={labelAlign}
      label={label}
    >
      <Check {...props} onPress={onPress} />
    </WithLabel>
  );
};

export { Checkbox };
