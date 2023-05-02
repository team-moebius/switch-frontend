import React, { forwardRef } from 'react';
import { TouchableOpacity, View } from 'react-native';

interface RadioProps {
  selected: boolean;
  onPress: () => void;
  radius?: number;
}

const Radio = ({ selected, onPress, radius = 10 }: RadioProps) => {
  const innerRadius = radius - 4;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: radius,
          height: radius,
          borderRadius: radius,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <View
          style={[
            {
              width: innerRadius,
              height: innerRadius,
              borderRadius: innerRadius,
            },
            selected
              ? { backgroundColor: 'black' }
              : { backgroundColor: 'transparent' },
          ]}
        ></View>
      </View>
    </TouchableOpacity>
  );
};
export default Radio;
