import React, { ReactNode, useMemo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Box } from './Box';
import { Color } from 'src/@types/unit';

const { defaultWrapper } = StyleSheet.create({
  defaultWrapper: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 75,
    height: 28,
    borderRadius: 15,
  },
});

interface ToggleProps {
  value: boolean;
  handleOnPress: () => void;
  iconA?: ReactNode;
  iconB?: ReactNode;
  selectColor?: Color;
  backgroundColor?: Color;
  disabled?: boolean;
}

const Toggle = ({
  value,
  handleOnPress,
  iconA,
  iconB,
  selectColor = '#FFFFFF',
  backgroundColor = '#2ECC71',
  disabled = false,
}: ToggleProps) => {
  const absolutePositions = useMemo(() => {
    return value === false ? { left: 0 } : { right: 0 };
  }, [value]);
  return (
    <Pressable
      disabled={disabled}
      onPress={handleOnPress}
      style={[defaultWrapper, { backgroundColor }]}
    >
      <Box
        {...absolutePositions}
        position={'absolute'}
        backgroundColor={selectColor}
        width={40}
        height={28}
        borderRadius={15}
        border={'1 solid #ccc'}
      />
      {iconA}
      {iconB}
    </Pressable>
  );
};

export { Toggle, ToggleProps };
