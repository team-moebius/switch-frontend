import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutChangeEvent,
} from 'react-native';

export interface TagProps {
  color: string;
  children: string;
  onDelete?: () => void;
  backgroundColor: string;
  width: number;
  onTextLayout: (event: LayoutChangeEvent) => void;
}

const Tag = ({
  color,
  children,
  onDelete,
  backgroundColor,
  width,
  onTextLayout,
}: TagProps) => {
  return (
    <View style={[style.defaultWrapper, { backgroundColor, width }]}>
      <Pressable onPress={onDelete}>
        <Text style={[style.defaultText, { color }]} onLayout={onTextLayout}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default Tag;

const style = StyleSheet.create({
  defaultWrapper: {
    height: 14,
    width: 100,
    borderRadius: 15,
    flex: 1,
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
