import React, { ReactNode, useMemo } from 'react';
import { WithSwitchList } from '../template/WithSwitchList';
import { Pressable } from 'react-native';
import { WithSwitchItem } from '../template';

interface HistoryListItemProps {
  data: {
    myItem: string;
    selectedItem: string;
    ago: string;
  };
  onPress?: () => void;
}

const renderChildren = (children: string) => {
  return <WithSwitchItem name={children} nameFontSize={'cardList'} />;
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
        agoPosition={'bottom'}
        agoAlign={'noAlign'}
        listDirection={'row'}
      />
    </Pressable>
  );
};

export { HistoryListItem, HistoryListItemProps };
