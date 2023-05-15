import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Icon from '../Icon';

export interface ToggleProps {
  value: boolean;
  handleOnPress: () => void;
}

const Toggle = ({ value, handleOnPress }: ToggleProps) => {
  return (
    <View>
      <Pressable onPress={handleOnPress} style={defaultToggleContainer}>
        <View style={[defaultToggle, value ? { left: 0 } : { right: 0 }]} />
        <Icon name='copy-outline' size={24} color={value ? 'white' : 'black'} />
        <Icon
          name='timer-outline'
          size={24}
          color={value ? 'black' : 'white'}
        />
      </Pressable>
    </View>
  );
};

export default Toggle;

const { defaultToggleContainer, defaultToggle } = StyleSheet.create({
  defaultToggleContainer: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    justifyContent: 'space-around',
    width: 75,
    height: 28,
    borderRadius: 15,
  },
  defaultToggle: {
    position: 'absolute',
    backgroundColor: 'skyblue',
    width: 40,
    height: 28,
    borderRadius: 15,
  },
});
