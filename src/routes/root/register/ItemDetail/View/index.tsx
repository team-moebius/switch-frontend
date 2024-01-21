// import Swiper from 'react-native-swiper';
import { Pressable, useWindowDimensions } from 'react-native';
import { Box, Flexbox, Typography, Image } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { ItemCard, UserSummary } from 'src/components/molecule';
import { SwitchDetailData } from '../type';
import { UserSummaryData } from 'src/components/molecule/UserSummary';
import Swiper from 'react-native-swiper';

type SwitchDetailViewProps = {
  itemData: SwitchDetailData;
  userData: UserSummaryData;
  onClickReport: () => void;
};
const SwitchDetailView = ({
  userData,
  itemData,
  onClickReport,
}: SwitchDetailViewProps) => {
  const { title, date, description, hashTags, location, thumbnails } = itemData;
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
          {thumbnails.map((src, index) => (
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
      <Flexbox.Item width={'90%'} pt={20}>
        <ItemCard
          data={{
            title: title,
            date: date?.toDateString(),
            desc: description,
            // wantedItem: oppositeCategories.map(({ children }) => children),
            location: location,
            hashTags: hashTags,
            // liked: SWITCH_DETAIL_MOCK.liked,
          }}
        />
      </Flexbox.Item>
      <Separator />
      <Flexbox.Item width={'100%'}>
        <Flexbox alignItems='center' justifyContent='center'>
          <Pressable onPress={onClickReport}>
            <Typography fontSize={20} color={'#F1952B'}>
              신고하기
            </Typography>
          </Pressable>
        </Flexbox>
      </Flexbox.Item>
      <Separator />
      <Flexbox width={'90%'}>
        <UserSummary data={userData} />
      </Flexbox>
    </Flexbox>
  );
};

export { SwitchDetailView, SwitchDetailViewProps };
