import { FlatList } from 'react-native-gesture-handler';
import { Box, Flexbox } from 'src/components/atom';
import { HistoryListItem } from 'src/components/molecule';
import {
  SwitchHistoryListItemData,
  SWITCH_HISTORY_LIST_MOCK,
} from '../SwitchList.mock';

const ListItem = ({ item }: { item: SwitchHistoryListItemData }) => (
  <Flexbox.Item flex={1} width={'100%'}>
    <HistoryListItem
      data={{
        //TODO: 프로퍼티 refactoring
        myItem: item.items[0].name,
        selectedItem: item.items[1].name,
        ago: item.switchAt, // TODO: 시간 계산하는 로직 필요
      }}
      mirrorDirection={'row'}
    />
  </Flexbox.Item>
);

const Separator = () => (
  <Box height={1} backgroundColor={'gray'} mt={10} mb={10} />
);

const HistoryListContent = () => {
  return (
    <Flexbox width={'100%'} height={'100%'}>
      <FlatList<SwitchHistoryListItemData>
        data={SWITCH_HISTORY_LIST_MOCK}
        renderItem={ListItem}
        keyExtractor={(item, index) => `${index}`}
        numColumns={1}
        onEndReached={() => {
          console.debug('reacted end');
        }}
        onEndReachedThreshold={0.1}
        ItemSeparatorComponent={Separator}
      />
    </Flexbox>
  );
};

export { HistoryListContent };
