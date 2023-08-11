import React, { ReactNode, useMemo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Flexbox from './Flexbox';
import { Typography } from './Typograph';

const sizeStyle = StyleSheet.create({
  small: {
    height: 24,
    fontSize: 12,
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  middle: {
    height: 36,
    fontSize: 16,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  large: {
    height: 48,
    fontSize: 20,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

const typeStyle = StyleSheet.create({
  normal: {
    backgroundColor: '#3489eb',
    color: '#ffffff',
  },
  transparent: {
    backgroundColor: 'transparent',
    color: 'gray',
    width: 'auto',
    height: 'auto',
  },
});

interface ButtonProps {
  wide?: boolean;
  type: keyof typeof typeStyle;
  size: keyof typeof sizeStyle;
  onPress: () => void;
  children: ReactNode;
}

const Button = ({
  children,
  type = 'normal',
  wide = true,
  size = 'middle',
  ...props
}: ButtonProps) => {
  const title = useMemo(() => {
    return typeof children === 'string' ? (
      <Typography
        fontSize={sizeStyle[size].fontSize}
        color={typeStyle[type].color}
      >
        {children}
      </Typography>
    ) : (
      children
    );
  }, [children, type, size]);
  return (
    <Pressable
      {...props}
      style={[
        sizeStyle[size],
        typeStyle[type],
        { width: wide ? '100%' : 'fit-content' },
      ]}
    >
      <Flexbox
        width={wide ? '100%' : 'fit-content'}
        height={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {title}
      </Flexbox>
    </Pressable>
  );
};

export { Button, ButtonProps };
