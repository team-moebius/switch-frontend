import { Text, LayoutChangeEvent, TextStyle } from 'react-native';
import React from 'react';
import { Font } from 'src/assets/fonts';

// TODO : fontSize, fontColor 구체화 하기

interface TypographyProps
  extends Pick<TextStyle, 'fontFamily' | 'color' | 'fontWeight'> {
  children: string | number;
  fontSize: TextStyle['fontSize'];
  onLayout?: (event: LayoutChangeEvent) => void;
  fontFamily?: Font;
  ellipsizeMode?: 'tail' | 'head' | 'middle' | 'clip';
  numberOfLines?: number;
}

const Typography = ({
  color,
  fontSize,
  fontFamily,
  fontWeight,
  children,
  ...props
}: TypographyProps) => {
  return (
    <Text
      {...props}
      style={
        {
          color,
          fontFamily,
          fontSize,
          fontWeight,
        } as TextStyle
      }
    >
      {children}
    </Text>
  );
};

export { Typography, TypographyProps };
