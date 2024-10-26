import { ReactNode, useMemo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Flexbox from './Flexbox';
import { Typography } from './Typograph';
import { COLORS, FONT_SIZE } from 'src/assets/theme/base';

const sizeStyle = StyleSheet.create({
  small: {
    height: 24,
    fontSize: FONT_SIZE.smaller,
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  medium: {
    height: 36,
    fontSize: FONT_SIZE.normal,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  large: {
    height: 48,
    fontSize: FONT_SIZE.header,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

const typeStyle = StyleSheet.create({
  normal: {
    backgroundColor: COLORS.success,
    color: COLORS.neutral.white,
  },
  transparent: {
    backgroundColor: 'transparent',
    color: COLORS.success,
  },
  cancel: {
    backgroundColor: COLORS.neutral.gray,
    color: COLORS.primary[200],
  },
  warning: {
    backgroundColor: COLORS.error,
    color: COLORS.neutral.white,
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
