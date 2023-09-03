import { useMemo } from 'react';
import { FlatListProps } from 'react-native/types';
import { Box } from 'src/components/atom';

export type ListViewType = 'grid' | 'list';

const Separator = () => (
  <Box height={1} backgroundColor={'gray'} mt={10} mb={10} />
);

interface UseFlatListArgs<T>
  extends Pick<
    FlatListProps<T>,
    'onEndReached' | 'keyExtractor' | 'renderItem'
  > {
  type: ListViewType;
}

function useFlatList<T extends {}>({
  type,
  onEndReached,
  keyExtractor = (item, index) => `${index}`,
  renderItem,
}: UseFlatListArgs<T>): { viewKey: string } & Pick<
  FlatListProps<T>,
  | 'numColumns'
  | 'columnWrapperStyle'
  | 'ItemSeparatorComponent'
  | 'onEndReachedThreshold'
  | 'renderItem'
> {
  const props: ReturnType<typeof useFlatList<T>> = useMemo(() => {
    switch (type) {
      case 'grid':
        return {
          keyExtractor,
          numColumns: 2,
          onEndReachedThreshold: 0.1,
          onEndReached,
          renderItem,
          columnWrapperStyle: {
            gap: 10,
          },
          viewKey: `${type}`, //TODO: numColumns 를 변경할 경우, viewKey 가 동적으로 변해야함
        };
      case 'list':
        return {
          keyExtractor,
          numColumns: 1,
          onEndReached,
          onEndReachedThreshold: 0.1,
          renderItem,
          ItemSeparatorComponent: Separator,
          viewKey: `${type}`, //TODO:  numColumns 를 변경할 경우, viewKey 가 동적으로 변해야함
        };
    }
  }, [type, onEndReached, keyExtractor, renderItem]);

  return props;
}

export { useFlatList };
