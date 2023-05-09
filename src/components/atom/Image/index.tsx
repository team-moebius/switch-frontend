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
    <View style={style.defaultWrap}>
      <Image
        style={[style.defaultImage, { width, height }]}
        source={{ uri: `${imageUrl}` }}
        resizeMode={resizeMode}
      />
    </View>
  );
};

export default ImageBox;

const style = StyleSheet.create({
  defaultWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultImage: {
    height: 200,
    width: 200,
  },
});
