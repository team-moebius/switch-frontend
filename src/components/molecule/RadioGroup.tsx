import React, { ReactNode } from 'react';
import { Flexbox } from '../atom';

import { Radiobox, RadioboxProps } from './Radiobox';

type OptionValue = string | number;
type Option = {
  value: OptionValue;
  label?: ReactNode;
};

interface RadioGroupProps {
  labelLayout: Pick<RadioboxProps, 'labelAlign' | 'labelPosition'>;
  direction?: 'row' | 'column';
  onPress?: (value: OptionValue) => void;
  options: Option[];
  value: OptionValue;
}
const RadioGroup = ({
  value,
  onPress,
  options,
  direction = 'row',
  labelLayout = { labelAlign: 'left', labelPosition: 'right' },
}: RadioGroupProps) => {
  const { labelAlign, labelPosition } = labelLayout;
  return (
    <Flexbox gap={8} flexDirection={direction}>
      {options.map((option) => {
        return (
          <Flexbox.Item key={option.value} flex={1}>
            <Radiobox
              labelAlign={labelAlign}
              labelPosition={labelPosition}
              checked={value === option.value}
              onPress={() => {
                if (onPress) onPress(option.value);
              }}
              label={option.label}
            />
          </Flexbox.Item>
        );
      })}
    </Flexbox>
  );
};

export { RadioGroup };
