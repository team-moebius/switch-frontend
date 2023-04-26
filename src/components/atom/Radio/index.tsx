import React from 'react';
import { TouchableOpacity, View } from 'react-native';

interface RadioProps {
  label: string;
  selected: string;
  onPress: () => void;
  radius?: number;
}

const Radio = ({ label, selected, onPress, radius = 10 }: RadioProps) => {
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
              width: radius - 4,
              height: radius - 4,
              borderRadius: radius - 4,
            },
            selected === label
              ? { backgroundColor: 'black' }
              : { backgroundColor: 'transparent' },
          ]}
        ></View>
      </View>
    </TouchableOpacity>
  );
};

export default Radio;
