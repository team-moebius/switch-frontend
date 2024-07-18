import { ItemResponseStatusEnum } from '@team-moebius/api-typescript';
import { Flexbox, Tag } from 'src/components/atom';
import { ImageCard } from 'src/components/molecule';

interface ItemListCardProps {
  count?: number;
  title: string;
  imageSrc?: string;
  status?: ItemResponseStatusEnum;
}

const ItemListCard = ({
  count,
  title,
  imageSrc,
  status,
}: ItemListCardProps) => {
  return (
    <Flexbox.Item flex={1} position='relative' padding={10}>
      {!!count && (
        <Flexbox
          position='absolute'
          zIndex={1}
          right={15}
          top={13}
          justifyContent='center'
          alignItems='center'
        >
          <Tag disabled={false} color={'#FFFFFF'} backgroundColor={'#21BD9E'}>
            {status === 'IN_PROGRESS' ? 'ing' : `+${count}`}
          </Tag>
        </Flexbox>
      )}
      <ImageCard
        title={title}
        src={imageSrc}
        width={'100%'}
        height={150}
        resizeMode={'cover'}
      />
    </Flexbox.Item>
  );
};

export { ItemListCard };
