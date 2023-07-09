import React from 'react';
import { Flexbox, Image, Typography } from '../atom';
import { Pressable } from 'react-native';
import { SwitchItem } from '../template';

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
      <SwitchItem name={title} src={src} location={location} />
    </Pressable>
  );
};

export { TradingListItem, TradingListItemProps };
