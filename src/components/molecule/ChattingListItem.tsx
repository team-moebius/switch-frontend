import React, { ReactNode, useMemo } from 'react';
import { Flexbox, Typography } from '../atom';
import { SwitchList } from '../template/SwitchList';
import { WithSwitchList } from '../template/WithSwitchList';

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
    renderChildren(username);
  }, [username]);

  const childrenB = useMemo(() => {
    renderChildren(selectedItem);
  }, [selectedItem]);

  return (
    <WithSwitchList
      childrenA={childrenA as ReactNode}
      childrenB={childrenB as ReactNode}
      message={message}
      ago={ago}
      agoAlign={'center'}
      onPress={onPress}
    />
  );
};

export { ChattingListItem, ChattingListItemProps };
