import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  FlexAlign,
  FlexDirection,
  JustifyContent,
  FlexWrap,
} from 'src/@types/unit';
import { bindBoxStyle, BoxProps, BoxStyle } from './Box';

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
  alignItems?: FlexAlign;
  justifyContent?: JustifyContent;
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
  width = '100%',
  ...props
}: FlexboxProps) => {
  return (
    <View
      style={[
        {
          ...bindBoxStyle({ ...props, width }),
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
  alignItems,
  justifyContent,
  width = '100%',
  ...props
}: FlexItemProps) => {
  return (
    <View
      style={[
        { ...bindBoxStyle({ ...props, width }) },
        { alignSelf, flex, alignItems, justifyContent },
      ]}
    >
      {children}
    </View>
  );
};

export default Object.assign(Flexbox, {
  Item: FlexItem,
});
