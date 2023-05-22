import React from 'react';
import { Image as OriginalImage, StyleSheet } from 'react-native';
import { LengthElement } from 'src/@types/unit';

type ImageProps = {
  src: string;
  width: LengthElement;
  height: LengthElement;
  resizeMode?: 'contain' | 'center';
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

export default Image;

const ImageStyle = StyleSheet.create({
  default: {
    height: 200,
    width: 200,
  },
});
