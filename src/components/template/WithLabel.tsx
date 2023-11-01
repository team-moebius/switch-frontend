import React, { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { LengthElement } from 'src/@types/unit';
import { Flexbox } from 'src/components/atom';

interface layoutStyle {
  flex?: number;
  width?: LengthElement;
}
interface WithLabelProps {
  width?: LengthElement;
  height?: LengthElement;
  label?: ReactNode;
  onPress?: () => void;
  labelPosition?: keyof typeof labelPositionStyle;
  labelAlign?: keyof typeof labelAlignStyle;
  children?: ReactNode;
  childrenAlign?: keyof typeof labelAlignStyle;
  childrenLayout?: layoutStyle;
  labelLayout?: layoutStyle;
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
  labelPosition = 'right',
  labelAlign = 'left',
  childrenAlign = 'center',
  childrenLayout = { width: '100%', flex: 1 },
  labelLayout = { width: '100%', flex: 1 },
  onPress,
  children,
  label,
}: WithLabelProps) => {
  return (
    <Flexbox
      {...labelPositionStyle[labelPosition]}
      width={width}
      height={height}
      gap={8}
    >
      <Flexbox.Item flex={childrenLayout.flex} width={childrenLayout.width}>
        <Flexbox {...labelAlignStyle[childrenAlign]}>{children}</Flexbox>
      </Flexbox.Item>
      {label && (
        <Flexbox.Item flex={labelLayout.flex} width={labelLayout.width}>
          <Flexbox {...labelAlignStyle[labelAlign]}>
            <Pressable onPress={onPress}>{label}</Pressable>
          </Flexbox>
        </Flexbox.Item>
      )}
    </Flexbox>
  );
};

export { WithLabel, WithLabelProps };
