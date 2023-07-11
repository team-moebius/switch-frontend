import React from 'react';
import { Pressable } from 'react-native';
import { WithSwitchItem } from '../template';
import {
  descDirectionStyle,
  itemJustifyStyle,
  nameFontSizeStyle,
} from '../template/WithSwitchItem';

interface TradingListItemProps {
  data: {
    src: string;
    title: string;
    location: string;
  };
  onPress?: () => void;
  descDirection?: keyof typeof descDirectionStyle;
  itemJustify?: keyof typeof itemJustifyStyle;
  nameFontSize?: keyof typeof nameFontSizeStyle;
}

const TradingListItem = ({
  data,
  onPress,
  descDirection,
  itemJustify,
  nameFontSize,
}: TradingListItemProps) => {
  const { src, title, location } = data;

  return (
    <Pressable onPress={onPress}>
      <WithSwitchItem
        name={title}
        src={src}
        location={location}
        imageWidth={100}
        imageHeight={70}
        imageResizeMode={'center'}
        itemJustify={itemJustify}
        nameFontSize={nameFontSize}
        descDirection={descDirection}
      />
    </Pressable>
  );
};

export { TradingListItem, TradingListItemProps };
