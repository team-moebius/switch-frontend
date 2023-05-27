import React, { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { LengthElement } from 'src/@types/unit';
import { FlexBox } from 'src/components/atom';
import Radio, { RadioProps } from 'src/components/atom/Radio';

type LabelPosition = 'top' | 'left' | 'right' | 'bottom';
interface Radiobox extends RadioProps {
  width?: LengthElement;
  height?: LengthElement;
  label?: ReactNode;
  labelPosition?: LabelPosition;
  labelAlign?: 'left' | 'right';
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
    <FlexBox
      {...labelPositionStyle[labelPosition]}
      width={width}
      height={height}
      gap={8}
    >
      <FlexBox.Item>
        <Radio {...props} onPress={onPress} />
      </FlexBox.Item>
      <FlexBox.Item width={'100%'} flex={1}>
        <FlexBox {...labelAlignStyle[labelAlign]}>
          <Pressable onPress={onPress}>{label}</Pressable>
        </FlexBox>
      </FlexBox.Item>
    </FlexBox>
  );
};

export default Radiobox;
