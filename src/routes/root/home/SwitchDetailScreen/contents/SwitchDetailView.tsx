// import Swiper from 'react-native-swiper';
import { Pressable, useWindowDimensions } from 'react-native';
import { Box, Flexbox, Typography, Image } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { ItemCard, UserSummary } from 'src/components/molecule';
import { UserSummaryData } from 'src/components/molecule/UserSummary';
import Swiper from 'react-native-swiper';
import { SwitchDetailData } from '../SwitchList.mock';
import PALETTE from 'src/assets/theme/colors/palettes';

type SwitchDetailViewProps = {
  itemData: Omit<SwitchDetailData, 'date'> & { date: string };
  userData: UserSummaryData;
  onClickReport: () => void;
};
const SwitchDetailView = ({
  userData,
  itemData,
  onClickReport,
}: SwitchDetailViewProps) => {
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
                  resizeMode={'contain'}
                />
              </Box>
            ))}
        </Swiper>
      </Flexbox.Item>
      <Flexbox.Item width={'90%'} pt={5}>
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
        />
      </Flexbox.Item>
      <Separator width={'100%'} />
      <Flexbox.Item width={'100%'}>
        <Flexbox alignItems='center' justifyContent='center'>
          <Pressable onPress={onClickReport}>
            <Typography fontSize={20} color={PALETTE.red[200]}>
              신고하기
            </Typography>
          </Pressable>
        </Flexbox>
      </Flexbox.Item>
      <Separator width={'100%'} />
      <Flexbox width={'90%'}>
        <UserSummary data={userData} />
      </Flexbox>
    </Flexbox>
  );
};

export { SwitchDetailView, SwitchDetailViewProps };
