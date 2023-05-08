import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

type ImageProps = {
  imageUrl: string;
};

const ImageBox = ({ imageUrl }: ImageProps) => {
  return (
    <View style={style.defaultWrap}>
      <Image
        style={style.defaultImage}
        source={{ uri: `${imageUrl}` }}
        resizeMode='contain'
      />
    </View>
  );
};

export default ImageBox;

const style = StyleSheet.create({
  defaultWrap: {
    flex: 1,
  },
  defaultImage: {
    height: 100,
    width: 100,
  },
});
