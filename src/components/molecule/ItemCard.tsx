import { Flexbox, Icon, Tag, Typography } from '../atom';
import { Margin } from 'src/@types/unit';
import { Card } from './Card';
import { PressableIcon } from './PressableIcon';
import { useCallback } from 'react';
import { SwitchDetailData } from 'src/routes/root/home/SwitchDetailScreen/SwitchList.mock';
import { FONT_SIZE, COLORS } from 'src/assets/theme/base';
import PALETTE from 'src/assets/theme/colors/palettes';

interface ItemCardProps {
  data: Omit<SwitchDetailData, 'date'> & { date: string };
  margin?: Margin;
  onLikeHandler?: () => void;
  isMine: boolean;
}

const Header = ({
  name,
  date,
  category,
}: {
  name: string;
  date: string;
  category: string;
}) => {
  return (
    <Flexbox flexDirection='column' gap={5}>
      <Tag
        backgroundColor={PALETTE.yellow[100]}
        disabled
        color={COLORS.text}
        children={category}
      />
      <Typography fontSize={FONT_SIZE.header}>{name}</Typography>
      <Typography fontSize={FONT_SIZE.smaller}>{date}</Typography>
    </Flexbox>
  );
};

const Content = ({
  description,
  preferredCategories,
  preferredLocations,
  liked,
  onLikeHandler,
  isMine,
}: {
  description: string;
  preferredCategories?: string[];
  preferredLocations?: string[];
  liked: boolean;
  onLikeHandler: () => void;
  isMine: boolean;
}) => {
  const PreferredCategories = useCallback(
    () =>
      preferredCategories
        ? preferredCategories.map((preferredCategory) => (
            <Tag
              backgroundColor={PALETTE.yellow[100]}
              disabled
              color={COLORS.text}
              children={preferredCategory}
              key={preferredCategory}
            />
          ))
        : undefined,
    [preferredCategories]
  );
  const PreferredLocations = useCallback(
    () =>
      preferredLocations
        ? preferredLocations.map((location, el, arr) =>
            arr.length - 1 === el ? (
              <Typography fontSize={FONT_SIZE.normal} key={location}>
                {location}
              </Typography>
            ) : (
              <Typography
                fontSize={FONT_SIZE.normal}
                key={location}
              >{`${location} | `}</Typography>
            )
          )
        : undefined,
    [preferredLocations]
  );
  return (
    <Flexbox flexDirection={'column'} width={'100%'} gap={10}>
      <Flexbox.Item pb={30}>
        <Typography fontSize={FONT_SIZE.bigger}>{description}</Typography>
      </Flexbox.Item>
      {preferredCategories ? (
        <Flexbox alignItems='center' gap={5} flexWrap='wrap'>
          <Icon name={'swap-horizontal'} size={20} />
          <PreferredCategories />
        </Flexbox>
      ) : undefined}
      {preferredLocations ? (
        <Flexbox
          alignItems='center'
          justifyContent='space-between'
          width={'100%'}
        >
          <Flexbox.Item flex={0.9}>
            <Flexbox alignItems='center' gap={5} flexWrap='wrap'>
              <Icon name={'location-outline'} size={20} />
              <PreferredLocations />
            </Flexbox>
          </Flexbox.Item>
          {isMine ? undefined : (
            <PressableIcon
              name={liked ? 'heart' : 'heart-outline'}
              size={32}
              onPress={onLikeHandler}
              color={PALETTE.red[200]}
            />
          )}
        </Flexbox>
      ) : undefined}
    </Flexbox>
  );
};

const ItemCard = ({ data, onLikeHandler, isMine }: ItemCardProps) => {
  const {
    name = '',
    date = '',
    description = '',
    preferredCategories,
    preferredLocations,
    category = '',
    liked = false,
  } = data;

  return (
    <Card
      contentWrapperStyle={{ pt: 20 }}
      footerWrapperStyle={{ pt: 10 }}
      header={<Header name={name} date={date} category={category} />}
      content={
        <Content
          description={description}
          preferredCategories={preferredCategories}
          preferredLocations={preferredLocations}
          liked={liked}
          onLikeHandler={onLikeHandler ? onLikeHandler : () => {}}
          isMine={isMine}
        />
      }
    />
  );
};

export { ItemCard, ItemCardProps };
