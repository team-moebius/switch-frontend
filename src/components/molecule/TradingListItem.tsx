import React from 'react';
import { Pressable } from 'react-native';
import { WithImage } from '../template';
import {
  childDirectionStyle,
  itemJustifyStyle,
  fontSizeStyle,
} from '../template/WithImage';
import { Typography } from '../atom';

interface TradingListItemProps {
  data: {
    src: string;
    title: string;
    location: string;
  };
  onPress?: () => void;
  childDirection?: keyof typeof childDirectionStyle;
  itemJustify?: keyof typeof itemJustifyStyle;
  fontSize?: keyof typeof fontSizeStyle;
}

const TradingListItem = ({
  data,
  onPress,
  childDirection,
  itemJustify,
  fontSize,
}: TradingListItemProps) => {
  const { src, title, location } = data;

  return (
    <Pressable onPress={onPress}>
      <WithImage
        text={title}
        src={src}
        fontSize={fontSize}
        imageWidth={100}
        imageHeight={70}
        imageResizeMode={'center'}
        itemJustify={itemJustify}
        children={<Typography fontSize={13}>{location}</Typography>}
        childDirection={childDirection}
      />
    </Pressable>
  );
};

export { TradingListItem, TradingListItemProps };
