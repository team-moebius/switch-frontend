import React from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Color, LengthElement } from 'src/@types/unit';
import FlexBox from '../FlexBox';
import Typography from '../Typography';

export interface TagProps {
  color: string;
  children: string;
  onDelete?: () => void;
  backgroundColor: Color;
  width: LengthElement;
  onTextLayout: (event: LayoutChangeEvent) => void;
}

const Tag = ({
  color,
  children,
  backgroundColor = '#797979',
  width = 100,
  onTextLayout,
}: TagProps) => {
  return (
    <FlexBox
      width={width}
      height={14}
      padding={5}
      borderRadius={15}
      backgroundColor={backgroundColor}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography fontSize={12} fontColor={color} onLayout={onTextLayout}>
        {children}
      </Typography>
    </FlexBox>
  );
};

export default Tag;
