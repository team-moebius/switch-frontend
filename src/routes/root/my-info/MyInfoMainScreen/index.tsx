import { useCallback } from 'react';

import { Box, Button, Flexbox } from 'src/components/atom';
import { UserSummary } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';
import { ListView } from 'src/components/template/ListView';
import { useFlatList } from 'src/hooks/useFlatList';
import {
  StuffListItemData,
  STUFF_LIST_MOCK,
} from '../../home/HomeMainScreen/SwitchList.mock';
import { ItemListCard } from './content/ItemListCard';
import { USERINFO_MOCK } from './UserInfo.mock';

const MyInfoMainScreen = ({ navigation }) => {
  const loadMoreData = useCallback(() => {
    console.debug('reacted end');
  }, []);

  const renderItem = useCallback(({ item }: { item: StuffListItemData }) => {
    return (
      <ItemListCard
        title={item.name}
        count={item.waitingCount}
        imageSrc={item.thumbnail}
      />
    );
  }, []);

  const flatListProps = useFlatList<StuffListItemData>({
    type: 'grid',
    onEndReached: loadMoreData,
    renderItem,
  });

  return (
    <ScreenWrapper>
      <Box>
        <UserSummary
          data={{
            user: USERINFO_MOCK.userName,
            verified: USERINFO_MOCK.verified,
            countSwitch: USERINFO_MOCK.switchCount,
            userRate: USERINFO_MOCK.userRate,
            bio: USERINFO_MOCK.introduce,
          }}
        />
        <Flexbox justifyContent='center' alignItems='center' mt={10} mb={10}>
          <Box width={200}>
            <Button
              type={'normal'}
              size={'medium'}
              onPress={function (): void {
                navigation.navigate('EditMyInfo');
              }}
            >
              내 정보 편집하기
            </Button>
          </Box>
        </Flexbox>
      </Box>
      <Box height={1} width={'100%'} backgroundColor='#000000' />
      <Flexbox height={'100%'}>
        <ListView<StuffListItemData>
          {...flatListProps}
          data={STUFF_LIST_MOCK}
        />
      </Flexbox>
    </ScreenWrapper>
  );
};

export { MyInfoMainScreen };
