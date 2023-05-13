import React from 'react';
import { Pressable, View } from 'react-native';
import Icon from '../Icon';

export interface ToggleProps {
  toggle: boolean;
  handleOnPress: () => void;
}

const Toggle = ({ toggle, handleOnPress }: ToggleProps) => {
  return (
    <View>
      <Pressable
        onPress={handleOnPress}
        style={{
          flexDirection: 'row',
          backgroundColor: 'gray',
          justifyContent: 'space-around',
          width: 75,
          height: 28,
          borderRadius: 15,
        }}
      >
        <View
          style={[
            {
              position: 'absolute',
              backgroundColor: 'skyblue',
              width: 40,
              height: 28,
              borderRadius: 15,
            },
            toggle ? { left: 0 } : { right: 0 },
          ]}
        />
        <Icon
          name='copy-outline'
          size={24}
          color={toggle ? 'white' : 'black'}
        />
        <Icon
          name='timer-outline'
          size={24}
          color={toggle ? 'black' : 'white'}
        />
      </Pressable>
    </View>
  );
};

export default Toggle;
