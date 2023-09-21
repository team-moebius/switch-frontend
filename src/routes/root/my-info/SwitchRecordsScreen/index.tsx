import { useCallback } from 'react';

import { ListView } from 'src/components/template/ListView';
import { RecordCard } from './content/RecordCard';

import { useFlatList } from 'src/hooks/useFlatList';
import { RecordData, RecordMock } from './SwitchRecords.mock';
import { ScreenWrapper } from 'src/components/template';

const SwitchRecordsScreen = () => {
  const loadMoreData = () => {
    alert('load more data');
  };

  const renderItem = useCallback(({ item }: { item: RecordData }) => {
    const { date, ...items } = item;
    return <RecordCard data={items} date={date} />;
  }, []);

  const flatListProps = useFlatList<RecordData>({
    type: 'list',
    onEndReached: loadMoreData,
    renderItem,
  });

  return (
    <ScreenWrapper>
      <ListView<RecordData> {...flatListProps} data={RecordMock} />
    </ScreenWrapper>
  );
};

export { SwitchRecordsScreen };
