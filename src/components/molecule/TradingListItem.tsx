import React from 'react';
import { Flexbox, Image, Typography } from '../atom';

interface TradingListItemProps {
  data: {
    src: string;
    title: string;
    location: string;
  };
}

const TradingListItem = ({ data, ...props }: TradingListItemProps) => {
  const { src, title, location } = data;
  return (
    <Flexbox gap={20} alignItems='center'>
      <Flexbox.Item>
        <Image width={100} height={70} src={src} resizeMode='center' />
      </Flexbox.Item>
      <Flexbox flexDirection='column' gap={10}>
        <Flexbox.Item>
          <Typography fontSize={15}>{title}</Typography>
        </Flexbox.Item>
        <Flexbox.Item>
          <Typography fontSize={13}>{location}</Typography>
        </Flexbox.Item>
      </Flexbox>
    </Flexbox>
  );
};

export { TradingListItem, TradingListItemProps };
