import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { WithImage } from '../template';
import { childDirectionStyle, fontSizeStyle } from '../template/WithImage';
import { Flexbox, Typography } from '../atom';

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

export const itemJustifyStyle = StyleSheet.create({
  left: {
    justifyContent: undefined,
  },
  center: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
});

const TradingListItem = ({
  data,
  onPress,
  childDirection,
  itemJustify = 'left',
  fontSize,
}: TradingListItemProps) => {
  const { src, title, location } = data;

  return (
    <Pressable onPress={onPress}>
      <Flexbox {...itemJustifyStyle[itemJustify]}>
        <Flexbox.Item>
          <WithImage
            text={title}
            src={src}
            fontSize={fontSize}
            imageWidth={100}
            imageHeight={70}
            imageResizeMode={'center'}
            children={<Typography fontSize={13}>{location}</Typography>}
            childDirection={childDirection}
          />
        </Flexbox.Item>
      </Flexbox>
    </Pressable>
  );
};

export { TradingListItem, TradingListItemProps };
