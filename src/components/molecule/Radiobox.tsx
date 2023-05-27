import React from 'react';

import { Radio, RadioProps } from 'src/components/atom/Radio';
import { WithLabel } from '../template';
import { WithLabelProps } from '../template/WithLabel';

interface Radiobox extends RadioProps, WithLabelProps {}

const Radiobox = ({
  labelPosition = 'right',
  labelAlign = 'left',
  width,
  height,
  label,
  onPress,
  ...props
}: Radiobox) => {
  return (
    <WithLabel
      onPress={onPress}
      width={width}
      height={height}
      labelPosition={labelPosition}
      labelAlign={labelAlign}
      label={label}
    >
      <Radio {...props} onPress={onPress} />
    </WithLabel>
  );
};

export { Radiobox };