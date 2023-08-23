import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  FlexAlign,
  FlexDirection,
  JustifyContent,
  FlexWrap,
} from 'src/@types/unit';
import { bindBoxStyle, BoxProps, BoxStyle } from './Box';

const FlexContainerStyles = StyleSheet.create({
  default: {
    ...BoxStyle.default,
    display: 'flex',
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const FlexboxStyles = {
  container: FlexContainerStyles,
};

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
  flexDirection,
  justifyContent,
  alignItems,
  rowGap,
  columnGap,
  gap,
  children,
  flexWrap,
  ...props
}: FlexboxProps) => {
  return (
    <View
      style={[
        FlexboxStyles.container.default,
        {
          ...bindBoxStyle(props),
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

const FlexItem = ({ children, alignSelf, flex, ...props }: FlexItemProps) => {
  return (
    <View style={[{ ...bindBoxStyle(props) }, { alignSelf, flex }]}>
      {children}
    </View>
  );
};

export default Object.assign(Flexbox, {
  Item: FlexItem,
});
