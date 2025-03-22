import {
  DimensionValue,
  Image as OriginalImage,
  StyleSheet,
} from 'react-native';

const ImageStyle = StyleSheet.create({
  default: {
    height: 200,
    width: 200,
  },
});

type ImageProps = {
  src?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  resizeMode?: 'contain' | 'center' | 'cover';
  radius?: DimensionValue;
};

const Image = ({ src, width, height, resizeMode, radius }: ImageProps) => {
  return (
    <OriginalImage
      style={[ImageStyle.default, { width, height, borderRadius: radius ?? 0 }]}
      source={{ uri: src }}
      resizeMode={resizeMode}
    />
  );
};

export { Image, ImageProps };
