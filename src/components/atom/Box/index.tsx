import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import {
  Border,
  BorderStyle,
  Color,
  LengthElement,
  Margin,
  MarginElement,
  Padding,
} from 'src/@types/unit';

//import { FlexStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

interface BoxStyleProps {
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
  height?: LengthElement | 'auto';
  background?: Color;
  //Border
  border?: Border;
  borderRadius?: LengthElement;
}
export interface BoxProps extends BoxStyleProps {
  style?: Omit<ViewStyle, 'borderRadius'>;
  children?: ReactNode;
}

const pixelToNumber = (
  pixelLike?: `${number}px` | string
): number | `${number}%` | undefined => {
  if (typeof pixelLike === 'number') {
    return pixelLike;
  }
  if (typeof pixelLike === 'string') {
    let value: string = pixelLike;
    if (pixelLike.includes('%')) {
      return pixelLike as `${number}%`;
    }
    if (pixelLike.includes('px')) {
      value = pixelLike.split('px')[0];
    }
    return Number(value);
  }
  return undefined;
};

export const bindBoxStyle = ({
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
}: BoxStyleProps): ViewStyle => {
  const [borderWidth, borderStyle, borderColor] = (() => {
    const splits = (border || '').split(' ');
    return [...splits];
  })();
  return {
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
    borderWidth: pixelToNumber(borderWidth),
  } as unknown as ViewStyle;
};

const Box = ({ style, children, ...props }: BoxProps) => {
  return (
    <View style={{ ...style, ...bindBoxStyle({ ...props }) }}>{children}</View>
  );
};

export default Box;
