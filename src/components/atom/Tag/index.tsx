import React, { useEffect, useState } from 'react';
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
}

const Tag = ({ color, children, onDelete }: TagProps) => {
  const [width, setWidth] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>('#797979'); // Default color is gray

  const onTextLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setWidth(width + 10);
  };

  useEffect(() => {
    const randomHexColor = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
    setBackgroundColor(randomHexColor);
  }, []);

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
