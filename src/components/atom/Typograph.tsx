import { Text, LayoutChangeEvent } from 'react-native';
import React from 'react';

// TODO : fontSize, fontColor 구체화 하기
interface TypographyProps {
  children: string | number;
  onLayout?: (event: LayoutChangeEvent) => void;
  fontSize?: number;
  fontColor?: string;
}

const Typography = ({
  fontColor,
  fontSize,
  children,
  ...props
}: TypographyProps) => {
  return (
    <Text {...props} style={{ color: fontColor, fontSize }}>
      {children}
    </Text>
  );
};

export { Typography };
