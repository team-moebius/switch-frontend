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
  medium: {
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
  },
  cancel: {
    backgroundColor: '#d1d1d1',
    color: '#3489eb',
  },
  warning: {
    backgroundColor: '#d22f26',
    color: '#ffffff',
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
  size = 'medium',
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
    <Pressable {...props}>
      <Flexbox
        {...sizeStyle[size]}
        {...typeStyle[type]}
        width={wide ? '100%' : 'auto'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Flexbox.Item>{title}</Flexbox.Item>
      </Flexbox>
    </Pressable>
  );
};

export { Button, ButtonProps };
