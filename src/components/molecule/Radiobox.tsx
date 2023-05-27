import React, { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { LengthElement } from 'src/@types/unit';
import { Flexbox } from 'src/components/atom';
import { Radio, RadioProps } from 'src/components/atom/Radio';

interface Radiobox extends RadioProps {
  width?: LengthElement;
  height?: LengthElement;
  label?: ReactNode;
  labelPosition?: keyof typeof labelPositionStyle;
  labelAlign?: keyof typeof labelAlignStyle;
}

const labelPositionStyle = StyleSheet.create({
  top: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const labelAlignStyle = StyleSheet.create({
  left: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  right: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

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
    <Flexbox
      {...labelPositionStyle[labelPosition]}
      width={width}
      height={height}
      gap={8}
    >
      <Flexbox.Item>
        <Radio {...props} onPress={onPress} />
      </Flexbox.Item>
      <Flexbox.Item width={'100%'} flex={1}>
        <Flexbox {...labelAlignStyle[labelAlign]}>
          <Pressable onPress={onPress}>{label}</Pressable>
        </Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { Radiobox };
