import React, { ReactNode, useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import {
  Border,
  BorderStyle,
  Color,
  LengthElement,
  Margin,
  MarginElement,
  Padding,
} from 'src/@types/unit';

export interface BoxProps {
  //Padding
  padding?: Padding;
  pt?: LengthElement;
  pb?: LengthElement;
  pl?: LengthElement;
  pr?: LengthElement;
  //margin
  margin?: Margin;
  mt?: MarginElement;
  mb?: MarginElement;
  ml?: MarginElement;
  mr?: MarginElement;
  //Width and Height
  width?: LengthElement;
  height?: LengthElement;
  background?: Color;
  //Border
  border?: Border;
  borderRadius?: LengthElement;
  children?: ReactNode;
}

const Box = ({
  padding,
  pt,
  pb,
  pl,
  pr,
  margin,
  mt,
  mb,
  ml,
  mr,
  width = '100%',
  height = 'auto',
  background,
  border,
  children,
}: BoxProps) => {
  const [borderWidth, borderStyle, borderColor] = useMemo(() => {
    const splits = (border || '').split(' ');
    return [...splits];
  }, [border]);

  return (
    <View
      style={
        {
          padding,
          paddingTop: pt,
          paddingBottom: pb,
          paddingRight: pr,
          paddingLeft: pl,
          margin,
          marginTop: mt,
          marginBottom: mb,
          marginLeft: ml,
          marginRight: mr,
          width,
          height,
          backgroundColor: background,
          borderColor,
          borderStyle: borderStyle as BorderStyle,
          borderWidth: borderWidth.includes('px')
            ? borderWidth
            : Number(borderWidth || 0),
        } as unknown as StyleProp<ViewStyle>
      }
    >
      {children}
    </View>
  );
};

export default Box;
