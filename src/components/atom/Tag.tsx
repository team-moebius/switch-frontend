import React from 'react';
import { Pressable } from 'react-native';
import { Color } from 'src/@types/unit';
import Flexbox from './Flexbox';
import { Typography } from './Typograph';

interface TagProps {
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
    <Flexbox
      width={'auto'}
      height={14}
      padding={5}
      borderRadius={15}
      backgroundColor={backgroundColor}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Pressable onPress={onPress}>
        <Typography fontSize={12} color={color}>
          {children}
        </Typography>
      </Pressable>
    </Flexbox>
  );
};

export { Tag, TagProps };
