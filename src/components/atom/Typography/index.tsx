import { View, Text } from 'react-native';
import React from 'react';

// TODO : fontSize, fontColor 구체화 하기
interface TypographyProps {
  children: string;
  fontSize?: number;
  fontColor?: string;
}

const Typography = ({ children, ...props }: TypographyProps) => {
  return (
    <View>
      <Text style={props}>{children}</Text>
    </View>
  );
};

export default Typography;
