import React, { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { LengthElement } from 'src/@types/unit';
import { Flexbox } from 'src/components/atom';

interface WithLabelProps {
  width?: LengthElement;
  height?: LengthElement;
  label?: ReactNode;
  onPress?: () => void;
  labelPosition?: keyof typeof labelPositionStyle;
  labelAlign?: keyof typeof labelAlignStyle;
  children?: ReactNode;
  childrenAlign?: keyof typeof labelAlignStyle;
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

const WithLabel = ({
  width,
  height,
  children,
  onPress,
  labelPosition = 'right',
  label,
  labelAlign = 'left',
  childrenAlign = 'center',
}: WithLabelProps) => {
  return (
    <Flexbox
      {...labelPositionStyle[labelPosition]}
      width={width}
      height={height}
      gap={8}
    >
      <Flexbox.Item width={'100%'} flex={1}>
        <Flexbox {...labelAlignStyle[childrenAlign]}>{children}</Flexbox>
      </Flexbox.Item>
      {label && (
        <Flexbox.Item width={'100%'} flex={1}>
          <Flexbox {...labelAlignStyle[labelAlign]}>
            <Pressable onPress={onPress}>{label}</Pressable>
          </Flexbox>
        </Flexbox.Item>
      )}
    </Flexbox>
  );
};

export { WithLabel, WithLabelProps };
