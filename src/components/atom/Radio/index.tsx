import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FlexBox } from 'src/components/atom';

interface RadioProps {
  selected: boolean;
  radius?: number;
  onPress?: () => void;
}

const Radio = ({ selected, onPress, radius = 12 }: RadioProps) => {
  return (
    <FlexBox
      width={radius}
      height={radius}
      border={'1 solid black'}
      justifyContent={'center'}
      alignItems={'center'}
      borderRadius={'50%'}
    >
      <TouchableOpacity onPress={onPress}>
        <FlexBox.Item
          width={radius * 0.5}
          height={radius * 0.5}
          borderRadius={'50%'}
          backgroundColor={selected ? 'black' : 'transparent'}
        ></FlexBox.Item>
      </TouchableOpacity>
    </FlexBox>
  );
};
export default Radio;
