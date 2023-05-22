import React from 'react';
import { Pressable } from 'react-native';
import { Color } from 'src/@types/unit';
import FlexBox from '../FlexBox';
import Typography from '../Typography';

export interface TagProps {
  color: string;
  children: string;
  onPress?: () => void;
  backgroundColor: Color;
}

const Tag = ({
  color,
  children,
  backgroundColor = '#797979',
  onPress,
}: TagProps) => {
  return (
    <FlexBox
      width={'fit-content'}
      height={14}
      padding={5}
      borderRadius={15}
      backgroundColor={backgroundColor}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Pressable onPress={onPress}>
        <Typography fontSize={12} fontColor={color}>
          {children}
        </Typography>
      </Pressable>
    </FlexBox>
  );
};

export default Tag;
