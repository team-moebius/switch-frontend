import React, { useMemo } from 'react';
import {
  WithSwitchList,
  agoAlignStyle,
  agoPositionStyle,
} from '../template/WithSwitchList';
import { Pressable } from 'react-native';
import { WithSwitchItem } from '../template';
import { listDirectionStyle } from '../template/SwitchList';

interface HistoryListItemProps {
  data: {
    myItem: string;
    selectedItem: string;
    ago: string;
  };
  onPress?: () => void;
  agoPosition?: keyof typeof agoPositionStyle;
  agoAlign?: keyof typeof agoAlignStyle;
  listDirection?: keyof typeof listDirectionStyle;
}

const renderChildren = (children: string) => {
  return <WithSwitchItem name={children} nameFontSize={'cardList'} />;
};

const HistoryListItem = ({
  data,
  onPress,
  agoPosition,
  agoAlign,
  listDirection,
}: HistoryListItemProps) => {
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
        childrenA={childrenA}
        childrenB={childrenB}
        ago={ago}
        agoPosition={agoPosition}
        agoAlign={agoAlign}
        listDirection={listDirection}
      />
    </Pressable>
  );
};

export { HistoryListItem, HistoryListItemProps };
