import React from 'react';
import { Pressable } from 'react-native';
import { WithSwitchItem } from '../template';

interface TradingListItemProps {
  data: {
    src: string;
    title: string;
    location: string;
  };
  onPress?: () => void;
}

const TradingListItem = ({ data, onPress }: TradingListItemProps) => {
  const { src, title, location } = data;

  return (
    <Pressable onPress={onPress}>
      <WithSwitchItem
        name={title}
        src={src}
        location={location}
        itemJustify={'left'}
        imageWidth={100}
        imageHeight={70}
        imageResizeMode={'center'}
        nameFontSize={'cardList'}
        descPosition={'column'}
      />
    </Pressable>
  );
};

export { TradingListItem, TradingListItemProps };
