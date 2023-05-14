import React from 'react';
import { FlexAlign, FlexDirection, JustifyContent } from 'src/@types/unit';
import Box, { BoxProps } from '../Box';

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
    <Box
      {...props}
      style={{
        display: 'flex',
        flexDirection,
        justifyContent,
        alignItems,
        rowGap,
        columnGap,
        gap,
      }}
    >
      {children}
    </Box>
  );
};

interface FlexItemProps extends BoxProps {
  alignSelf?: FlexAlign | 'auto';
  flex?: number;
}

const FlexItem = ({ children, alignSelf, flex, ...props }: FlexItemProps) => {
  return (
    <Box {...props} style={{ alignSelf, flex }}>
      {children}
    </Box>
  );
};

export default Object.assign(FlexBox, {
  Item: FlexItem,
});
