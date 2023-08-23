import React from 'react';
import { Image as OriginalImage, StyleSheet } from 'react-native';
import { LengthElement } from 'src/@types/unit';

const ImageStyle = StyleSheet.create({
  default: {
    height: 200,
    width: 200,
  },
});

type ImageProps = {
  src?: string;
  width?: LengthElement;
  height?: LengthElement;
  resizeMode?: 'contain' | 'center' | 'cover';
};

const Image = ({ src, width, height, resizeMode }: ImageProps) => {
  return (
    <OriginalImage
      style={[ImageStyle.default, { width, height }]}
      source={{ uri: src }}
      resizeMode={resizeMode}
    />
  );
};

export { Image, ImageProps };
