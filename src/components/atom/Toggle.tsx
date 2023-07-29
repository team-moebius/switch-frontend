import React, { useMemo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Box } from './Box';
import { Icon } from './Icon';

const { defaultWrapper } = StyleSheet.create({
  defaultWrapper: {
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: 'gray',
    justifyContent: 'space-around',
    width: 75,
    height: 28,
    borderRadius: 15,
  },
});

interface ToggleProps {
  value: boolean;
  handleOnPress: () => void;
}

const Toggle = ({ value, handleOnPress }: ToggleProps) => {
  const absolutePositions = useMemo(() => {
    return value ? { left: 0 } : { right: 0 };
  }, [value]);
  return (
    <Pressable onPress={handleOnPress} style={defaultWrapper}>
      <Box
        {...absolutePositions}
        position={'absolute'}
        backgroundColor={'blue'}
        width={40}
        height={28}
        borderRadius={15}
      />
      <Icon name='copy-outline' size={24} color={value ? 'white' : 'black'} />
      <Icon name='timer-outline' size={24} color={value ? 'black' : 'white'} />
    </Pressable>
  );
};

export { Toggle, ToggleProps };
