// import Swiper from 'react-native-swiper';
import { useWindowDimensions } from 'react-native';
import { Box, Flexbox, Image } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { ItemCard } from 'src/components/molecule';
import Swiper from 'react-native-swiper';
import { SwitchDetailData } from '../SwitchList.mock';
import { PADDING } from 'src/assets/theme/base';

type SwitchDetailViewProps = {
  itemData: Omit<SwitchDetailData, 'date'> & { date: string };
  isMine: boolean;
};
const SwitchDetailView = ({ itemData, isMine }: SwitchDetailViewProps) => {
  const {
    name,
    date,
    description,
    preferredLocations,
    preferredCategories,
    images,
    liked,
    category,
  } = itemData;
  const { width: screenWidth } = useWindowDimensions();

  return (
    <Flexbox
      width={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Flexbox.Item flex={1}>
        <Swiper
          horizontal
          containerStyle={{
            width: screenWidth,
            height: 285,
          }}
        >
          {images &&
            images.map((src, index) => (
              <Box key={index} width={'100%'} height={'100%'}>
                <Image
                  src={src}
                  width={'100%'}
                  height={'100%'}
                  resizeMode={'cover'}
                />
              </Box>
            ))}
        </Swiper>
      </Flexbox.Item>
      <Flexbox.Item
        pl={PADDING.wrapper.horizontal}
        pr={PADDING.wrapper.horizontal}
        pt={20}
      >
        <ItemCard
          data={{
            name,
            date,
            description,
            category,
            preferredLocations,
            preferredCategories,
            liked,
          }}
          isMine={isMine}
        />
      </Flexbox.Item>
      <Separator width={'100%'} />
    </Flexbox>
  );
};

export { SwitchDetailView, SwitchDetailViewProps };
