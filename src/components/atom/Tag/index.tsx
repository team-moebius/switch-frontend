import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface TagProps {
  color: string;
  children: string;
  backgroundColor: string;
  width?: number;
  onDelete?: () => void;
}

const Tag = ({ color, backgroundColor, children }: TagProps) => {
  return (
    <View style={[style.defaultWrapper, { backgroundColor }]}>
      <Text style={[style.defaultText, { color }]}>{children}</Text>
    </View>
  );
};

export default Tag;

const style = StyleSheet.create({
  defaultWrapper: {
    height: 15,
    width: 100,
    borderRadius: 15,
    backgroundColor: '#797979',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});
