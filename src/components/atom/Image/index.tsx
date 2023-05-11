import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

type ImageProps = {
  imageUrl: string;
  width: number;
  height: number;
  resizeMode?: 'contain' | 'center';
};

const ImageBox = ({ imageUrl, width, height, resizeMode }: ImageProps) => {
  return (
    <Image
      style={[style.defaultImage, { width, height }]}
      source={{ uri: imageUrl }}
      resizeMode={resizeMode}
    />
  );
};

export default ImageBox;

const style = StyleSheet.create({
  defaultImage: {
    height: 200,
    width: 200,
  },
});
