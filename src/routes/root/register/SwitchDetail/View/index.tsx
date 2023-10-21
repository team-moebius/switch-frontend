// import Swiper from 'react-native-swiper';
import { Pressable } from 'react-native';
import { Flexbox, Typography } from 'src/components/atom';
import { Separator } from 'src/components/atom/Separator';
import { ItemCard, UserSummary } from 'src/components/molecule';
import { SwitchDetailData } from '../type';
import { UserSummaryData } from 'src/components/molecule/UserSummary';

type SwitchDetailViewProps = {
  itemData: SwitchDetailData;
  userData: UserSummaryData;
};
const SwitchDetailView = ({ userData, itemData }: SwitchDetailViewProps) => {
  const { title, date, description, hashTags, location } = itemData;

  return (
    <Flexbox
      width={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      {/* <Flexbox.Item width={'100%'} height={'20%'}>
        <Swiper horizontal={true}>
          {thumbnails.map((src, index) => (
            <Box key={index} width={'100%'} height={'100%'}>
              <Image
                src={src}
                width={'100%'}
                height={'20%'}
                resizeMode='cover'
              />
            </Box>
          ))}
        </Swiper>
      </Flexbox.Item> */}
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
          <Pressable onPress={() => window.alert('신고하기')}>
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
