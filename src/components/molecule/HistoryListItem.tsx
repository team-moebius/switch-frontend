import React from 'react';
import { Flexbox, Icon, Typography } from '../atom';
import SwitchList from '../template/SwitchList';

interface HistoryListItemProps {
  data: {
    myItem: string;
    selectedItem: string;
    ago: string;
  };
}

const HistoryListItem = ({ data, ...props }: HistoryListItemProps) => {
  const { myItem, selectedItem, ago } = data;
  return (
    <Flexbox flexDirection='column' gap={10}>
      <Flexbox flexDirection='column'>
        <SwitchList itemA={myItem} itemB={selectedItem} />
      </Flexbox>
      <Flexbox.Item>
        <Typography fontSize={13}>{ago}</Typography>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { HistoryListItem, HistoryListItemProps };
