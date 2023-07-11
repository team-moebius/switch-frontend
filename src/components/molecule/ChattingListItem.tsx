import React, { ReactNode, useMemo } from 'react';
import { WithSwitchList } from '../template/WithSwitchList';
import { Pressable } from 'react-native';
import { WithSwitchItem } from '../template';

interface ChattingListItemProps {
  data: {
    username: string;
    selectedItem: string;
    message: string;
    ago: string;
  };
  onPress?: () => void;
}

const renderChildren = (children: string) => {
  return <WithSwitchItem name={children} nameFontSize={'cardList'} />;
};

const ChattingListItem = ({ data, onPress }: ChattingListItemProps) => {
  const { username, selectedItem, message, ago } = data;

  const childrenA = useMemo(() => {
    return renderChildren(username);
  }, [username]);

  const childrenB = useMemo(() => {
    return renderChildren(selectedItem);
  }, [selectedItem]);

  return (
    <Pressable onPress={onPress}>
      <WithSwitchList
        childrenA={childrenA}
        childrenB={childrenB}
        message={message}
        ago={ago}
        agoPosition={'right'}
        agoAlign={'center'}
        listDirection={'row'}
        messagePosition={'bottom'}
      />
    </Pressable>
  );
};

export { ChattingListItem, ChattingListItemProps };
