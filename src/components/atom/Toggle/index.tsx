import React, { useState } from 'react';
import { Animated, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Toggle = () => {
  const [toggleValue, setToggleValue] = useState<string>('copy-outline');
  const moveX = new Animated.Value(0);

  const handleOnPress = () => {
    setToggleValue((prev) =>
      prev === 'copy-outline' ? 'timer-outline' : 'copy-outline'
    );
    const toValue = toggleValue === 'copy-outline' ? 0 : 1;
    Animated.timing(moveX, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Pressable
        onPress={handleOnPress}
        style={{
          flexDirection: 'row',
          backgroundColor: 'gray',
          justifyContent: 'space-around',
          width: 80,
          position: 'relative',
          borderRadius: 15,
        }}
      >
        <Animated.View
          style={[
            {
              position: 'absolute',
              backgroundColor: 'skyblue',
              width: 45,
              height: 28,
              borderRadius: 15,
            },
            toggleValue === 'timer-outline' ? { right: 0 } : { left: 0 },
          ]}
        />
        <Ionicons
          name='copy-outline'
          size={24}
          color={toggleValue === 'copy-outline' ? 'white' : 'black'}
          style={{ zIndex: 1 }}
        />
        <Ionicons
          name='timer-outline'
          size={24}
          color={toggleValue === 'timer-outline' ? 'white' : 'black'}
          style={{ zIndex: 1 }}
        />
      </Pressable>
    </View>
  );
};

export default Toggle;
