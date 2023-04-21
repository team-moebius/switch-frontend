import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

// TODO : fontSize, fontColor 구체화 하기
interface ITypoProps {
  children: string;
  fontSize?: number;
  fontColor?: string;
}

const Typography = ({ children, ...props }: ITypoProps) => {
  return (
    <View>
      <Text style={style(props.fontColor, props.fontSize).font}>
        {children}
      </Text>
    </View>
  );
};

export default Typography;

const style = (fontColor?: string, fontSize?: number) =>
  StyleSheet.create({
    font: {
      color: fontColor ?? '#000000',
      fontSize: fontSize ?? 16,
    },
  });
