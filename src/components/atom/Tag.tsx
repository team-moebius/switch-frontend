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
  const handlePress = () => {
    if (onPress instanceof Function) {
      onPress();
    }
  };

  return (
    <Flexbox
      width={'fit-content'}
      height={14}
      padding={5}
      borderRadius={15}
      backgroundColor={backgroundColor}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Pressable onPress={handlePress}>
        <Typography fontSize={12} color={color}>
          {children}
        </Typography>
      </Pressable>
    </Flexbox>
  );
};

export { Tag };
