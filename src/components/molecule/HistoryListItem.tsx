import React, { ReactNode, useMemo } from 'react';
import { Flexbox, Typography } from '../atom';
import { WithSwitchList } from '../template/WithSwitchList';
import { Pressable } from 'react-native';

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
    return renderChildren(myItem);
  }, [myItem]);

  const childrenB = useMemo(() => {
    return renderChildren(selectedItem);
  }, [selectedItem]);

  return (
    <Pressable onPress={onPress}>
      <WithSwitchList
        childrenA={childrenA as ReactNode}
        childrenB={childrenB as ReactNode}
        ago={ago}
        agoPosition={'column'}
        agoAlign={'default'}
        listDirection={'default'}
      />
    </Pressable>
  );
};

export { HistoryListItem, HistoryListItemProps };
