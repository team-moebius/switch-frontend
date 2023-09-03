import { ReactNode } from 'react';
import { FlatListProps } from 'react-native/types';
import { FlatList } from 'react-native';
import { Flexbox } from '../atom';

interface ListViewProps<T>
  extends Pick<
    FlatListProps<T>,
    | 'onEndReached'
    | 'keyExtractor'
    | 'numColumns'
    | 'columnWrapperStyle'
    | 'ItemSeparatorComponent'
    | 'onEndReachedThreshold'
    | 'renderItem'
  > {
  data: Array<T>;
  optionBar?: ReactNode;
  viewKey?: string;
}
export function ListView<T extends {}>({
  viewKey = '',
  data,
  optionBar,
  ...props
}: ListViewProps<T>) {
  return (
    <Flexbox flexDirection={'column'} width={'100%'} height={'90%'}>
      <Flexbox.Item width={'100%'}>{optionBar}</Flexbox.Item>
      <Flexbox.Item width={'100%'} flex={1}>
        <FlatList<T> key={viewKey} {...props} data={data} />
      </Flexbox.Item>
    </Flexbox>
  );
}
