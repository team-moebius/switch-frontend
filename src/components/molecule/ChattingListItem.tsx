import React, { ReactNode, useMemo } from 'react';
import { Flexbox, Typography } from '../atom';
import { WithSwitchList } from '../template/WithSwitchList';
import { Pressable } from 'react-native';

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
  return (
    <Flexbox alignItems={'center'} gap={10}>
      <Flexbox.Item>
        <Typography fontSize={15}>{children}</Typography>
      </Flexbox.Item>
    </Flexbox>
  );
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
        childrenA={childrenA as ReactNode}
        childrenB={childrenB as ReactNode}
        message={message}
        ago={ago}
        agoPosition={'default'}
        agoAlign={'center'}
        listDirection={'default'}
      />
    </Pressable>
  );
};

export { ChattingListItem, ChattingListItemProps };
