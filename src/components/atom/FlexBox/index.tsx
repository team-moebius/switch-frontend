import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlexAlign, FlexDirection, JustifyContent } from 'src/@types/unit';
import { bindBoxStyle, BoxProps, BoxStyle } from '../Box';

interface FlexContainerProps extends BoxProps {
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: FlexAlign;
  rowGap?: number;
  columnGap?: number;
  gap?: number;
}

const FlexBox = ({
  flexDirection,
  justifyContent,
  alignItems,
  rowGap,
  columnGap,
  gap,
  children,
  ...props
}: FlexContainerProps) => {
  return (
    <View
      style={[
        FlexBoxStyles.container.default,
        {
          ...bindBoxStyle(props),
          flexDirection,
          justifyContent,
          columnGap,
          rowGap,
          gap,
          alignItems,
        },
      ]}
    >
      {children}
    </View>
  );
};

interface FlexItemProps extends BoxProps {
  alignSelf?: FlexAlign | 'auto';
  flex?: number;
}

const FlexItem = ({ children, alignSelf, flex, ...props }: FlexItemProps) => {
  return (
    <View style={[{ ...bindBoxStyle(props) }, { alignSelf, flex }]}>
      {children}
    </View>
  );
};

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

const FlexItemStyles = StyleSheet.create({});

const FlexBoxStyles = {
  container: FlexContainerStyles,
  item: FlexItemStyles,
};

export default Object.assign(FlexBox, {
  Item: FlexItem,
});
