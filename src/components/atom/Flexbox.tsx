import React from 'react';
import { View } from 'react-native';
import {
  FlexAlign,
  FlexDirection,
  JustifyContent,
  FlexWrap,
} from 'src/@types/unit';
import { bindBoxStyle, BoxProps } from './Box';

interface FlexboxProps extends BoxProps {
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: FlexAlign;
  flexWrap?: FlexWrap;
  rowGap?: number;
  columnGap?: number;
  gap?: number;
}

interface FlexItemProps extends BoxProps {
  alignSelf?: FlexAlign | 'auto';
  flex?: number;
}

const Flexbox = ({
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  rowGap,
  columnGap,
  gap,
  children,
  flexWrap,
  width = 'auto',
  ...props
}: FlexboxProps) => {
  return (
    <View
      style={[
        {
          ...bindBoxStyle({ ...props, width }),
          display: 'flex',
          flexDirection,
          flexWrap,
          justifyContent,
          alignItems,
          columnGap,
          rowGap,
          gap,
        },
      ]}
    >
      {children}
    </View>
  );
};

const FlexItem = ({
  children,
  alignSelf,
  flex,
  width = 'auto',
  ...props
}: FlexItemProps) => {
  return (
    <View
      style={[{ ...bindBoxStyle({ ...props, width }) }, { alignSelf, flex }]}
    >
      {children}
    </View>
  );
};

export { FlexboxProps };
export default Object.assign(Flexbox, {
  Item: FlexItem,
});
