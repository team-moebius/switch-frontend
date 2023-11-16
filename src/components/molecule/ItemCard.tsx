import React from 'react';
import { Flexbox, Icon, Tag, Typography } from '../atom';
import { TagProps } from '../atom/Tag';
import { Margin } from 'src/@types/unit';
import { Card } from './Card';
import { PressableIcon } from './PressableIcon';

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

const Header = ({ title, date }: { title: string; date: string }) => {
  return (
    <Flexbox flexDirection='column' gap={10}>
      <Typography fontSize={20}>{title}</Typography>
      <Typography fontSize={15}>{date}</Typography>
    </Flexbox>
  );
};

const Content = ({
  desc,
  wantedItem,
  location,
}: {
  desc: string;
  wantedItem: string;
  location: string;
}) => {
  return (
    <Flexbox flexDirection={'column'} width={'100%'} gap={10}>
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
};
const Footer = ({
  hashTags,
  onLikeHandler,
  liked,
}: {
  hashTags: TagProps[];
  onLikeHandler: () => void;
  liked: boolean;
}) => {
  return (
    <Flexbox width={'100%'} alignItems='center' justifyContent='space-between'>
      <Flexbox.Item>
        <Flexbox>
          {hashTags.map(({ children, ...props }: any, i) => (
            <Tag key={`${props.children}_${i}`} {...props} disabled>
              {children}
            </Tag>
          ))}
        </Flexbox>
      </Flexbox.Item>
      <Flexbox.Item>
        <PressableIcon
          name={liked ? 'heart' : 'heart-outline'}
          size={32}
          onPress={onLikeHandler}
        />
      </Flexbox.Item>
    </Flexbox>
  );
};

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

  return (
    <Card
      contentWrapperStyle={{ pt: 30 }}
      footerWrapperStyle={{ pt: 30 }}
      header={<Header title={title} date={date} />}
      content={
        <Content desc={desc} wantedItem={wantedItem} location={location} />
      }
      footer={
        <Footer
          hashTags={hashTags}
          onLikeHandler={() => {
            if (onLikeHandler) onLikeHandler();
          }}
          liked={liked}
        />
      }
    />
  );
};

export { ItemCard, ItemCardProps };
