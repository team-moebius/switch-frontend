import React from 'react';
import { Flexbox, Icon, Tag, Typography } from '../atom';
import { TagProps } from '../atom/Tag';
import { Margin } from 'src/@types/unit';
import { Pressable } from 'react-native';
import { Card } from './Card';

interface ItemCardProps {
  data: {
    title?: string;
    date?: string;
    desc?: string;
    wantedItem?: string;
    location?: string;
    hashTags?: TagProps[];
    liked?: boolean;
  };
  margin?: Margin;
  onLikeHandler?: () => void;
}

const ItemCard = ({ data, onLikeHandler }: ItemCardProps) => {
  const {
    title = '',
    date = '',
    desc = '',
    wantedItem = '',
    location = '',
    hashTags = [],
    liked = false,
  } = data;

  const header = (
    <Flexbox flexDirection='column' gap={10}>
      <Typography fontSize={20}>{title}</Typography>
      <Typography fontSize={15}>{date}</Typography>
    </Flexbox>
  );

  const content = (
    <Flexbox flexDirection='column' gap={10}>
      <Flexbox.Item pb={20}>
        <Typography fontSize={15}>{desc}</Typography>
      </Flexbox.Item>
      <Flexbox alignItems='center' gap={5}>
        <Icon name={'code-outline'} size={20} />
        <Typography fontSize={15}>{wantedItem}</Typography>
      </Flexbox>
      <Flexbox alignItems='center' gap={5}>
        <Icon name={'location-outline'} size={20} />
        <Typography fontSize={15}>{location}</Typography>
      </Flexbox>
    </Flexbox>
  );

  const footer = (
    <Flexbox alignItems='center' justifyContent='space-between'>
      <Flexbox.Item>
        <Flexbox>
          {hashTags.map(({ children, ...props }) => (
            <Tag {...props} disabled>
              {children}
            </Tag>
          ))}
        </Flexbox>
      </Flexbox.Item>
      <Flexbox.Item>
        <Pressable onPress={onLikeHandler}>
          <Icon name={liked ? 'heart' : 'heart-outline'} size={32} />
        </Pressable>
      </Flexbox.Item>
    </Flexbox>
  );

  return <Card gap={30} header={header} content={content} footer={footer} />;
};

export { ItemCard, ItemCardProps };
