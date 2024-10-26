import { Flexbox, Icon, Tag, Typography } from '../atom';
import { Margin } from 'src/@types/unit';
import { Card } from './Card';
import { PressableIcon } from './PressableIcon';
import { useCallback } from 'react';
import { SwitchDetailData } from 'src/routes/root/home/SwitchDetailScreen/SwitchList.mock';
import { FONT_SIZE, COLORS } from 'src/assets/theme/base';

interface ItemCardProps {
  data: Omit<SwitchDetailData, 'date'> & { date: string };
  margin?: Margin;
  onLikeHandler?: () => void;
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
        backgroundColor='#FFA500'
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
}: {
  description: string;
  preferredCategories: string[];
  preferredLocations: string[];
  liked: boolean;
  onLikeHandler: () => void;
}) => {
  const PreferredCategories = useCallback(
    () =>
      preferredCategories.map((preferredCategory) => {
        return (
          <Tag
            backgroundColor='#FFA500'
            disabled
            color={'white'}
            children={preferredCategory}
          />
        );
      }),
    [preferredCategories]
  );
  return (
    <Flexbox flexDirection={'column'} width={'100%'} gap={10}>
      <Flexbox.Item pb={30}>
        <Typography fontSize={17}>{description}</Typography>
      </Flexbox.Item>
      <Flexbox alignItems='center' gap={5} flexWrap='wrap'>
        <Icon name={'swap-horizontal'} size={20} />
        <PreferredCategories />
      </Flexbox>
      <Flexbox
        alignItems='center'
        justifyContent='space-between'
        width={'100%'}
      >
        <Flexbox.Item flex={0.9}>
          <Flexbox alignItems='center' gap={5} flexWrap='wrap'>
            <Icon name={'location-outline'} size={20} />
            {preferredLocations.map((location, el, arr) =>
              arr.length - 1 === el ? (
                <Typography fontSize={15}>{location}</Typography>
              ) : (
                <Typography fontSize={15}>{`${location} | `}</Typography>
              )
            )}
          </Flexbox>
        </Flexbox.Item>
        <PressableIcon
          name={liked ? 'heart' : 'heart-outline'}
          size={32}
          onPress={onLikeHandler}
          color='#d22f26'
        />
      </Flexbox>
    </Flexbox>
  );
};

const ItemCard = ({ data, onLikeHandler }: ItemCardProps) => {
  const {
    name = '',
    date = '',
    description = '',
    preferredCategories = [''],
    preferredLocations = [''],
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
        />
      }
    />
  );
};

export { ItemCard, ItemCardProps };
