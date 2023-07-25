import React from 'react';
import { Pressable } from 'react-native';
import { WithImage } from '../template';
import {
  descDirectionStyle,
  itemJustifyStyle,
  fontSizeStyle,
} from '../template/WithImage';

interface TradingListItemProps {
  data: {
    src: string;
    title: string;
    location: string;
  };
  onPress?: () => void;
  descDirection?: keyof typeof descDirectionStyle;
  itemJustify?: keyof typeof itemJustifyStyle;
  fontSize?: keyof typeof fontSizeStyle;
}

const TradingListItem = ({
  data,
  onPress,
  descDirection,
  itemJustify,
  fontSize,
}: TradingListItemProps) => {
  const { src, title, location } = data;

  return (
    <Pressable onPress={onPress}>
      <WithImage
        content={title}
        src={src}
        location={location}
        imageWidth={100}
        imageHeight={70}
        imageResizeMode={'center'}
        itemJustify={itemJustify}
        fontSize={fontSize}
        descDirection={descDirection}
      />
    </Pressable>
  );
};

export { TradingListItem, TradingListItemProps };
