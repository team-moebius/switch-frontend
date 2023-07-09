import React, { ReactNode, useMemo } from 'react';
import { Flexbox, Typography } from '../atom';
import { SwitchList } from '../template/SwitchList';
import { WithSwitchList } from '../template/WithSwitchList';
import { ItemDetail } from './SwitchListItem';

interface HistoryListItemProps {
  data: {
    myItem: string;
    selectedItem: string;
    ago: string;
  };
  onPress?: () => void;
}

const renderChildren = (children: string) => {
  return (
    <Flexbox alignItems={'center'} gap={10}>
      <Flexbox.Item>
        <Typography fontSize={15}>{children}</Typography>
      </Flexbox.Item>
    </Flexbox>
  );
};

const HistoryListItem = ({ data, onPress }: HistoryListItemProps) => {
  const { myItem, selectedItem, ago } = data;

  const childrenA = useMemo(() => {
    renderChildren(myItem);
  }, [myItem]);

  const childrenB = useMemo(() => {
    renderChildren(selectedItem);
  }, [selectedItem]);

  return (
    <WithSwitchList
      childrenA={childrenA as ReactNode}
      childrenB={childrenB as ReactNode}
      ago={ago}
      agoPosition={'column'}
      onPress={onPress}
    />
  );
};

export { HistoryListItem, HistoryListItemProps };
