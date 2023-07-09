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

const ChattingListItem = ({ data, onPress }: ChattingListItemProps) => {
  const { username, selectedItem, message, ago } = data;

  const childrenA = useMemo(() => {
    return (
      <Flexbox alignItems={'center'} gap={10}>
        <Flexbox.Item>
          <Typography fontSize={15}>{username}</Typography>
        </Flexbox.Item>
      </Flexbox>
    );
  }, []);

  const childrenB = useMemo(() => {
    return (
      <Flexbox alignItems={'center'} gap={10}>
        <Flexbox.Item>
          <Typography fontSize={15}>{selectedItem}</Typography>
        </Flexbox.Item>
      </Flexbox>
    );
  }, []);

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
