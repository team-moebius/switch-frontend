import React from 'react';
import { Flexbox, Typography } from '../atom';
import { SwitchList } from '../template/SwitchList';
import WithSwitchList from '../template/WithSwitchList';

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
    <WithSwitchList itemA={myItem} itemB={selectedItem} ago={ago} />
    // <Flexbox flexDirection='column' gap={10}>
    //   <Flexbox.Item>
    //     <SwitchList itemA={myItem} itemB={selectedItem} />
    //   </Flexbox.Item>
    //   <Flexbox.Item>
    //     <Typography fontSize={13}>{ago}</Typography>
    //   </Flexbox.Item>
    // </Flexbox>
  );
};

export { HistoryListItem, HistoryListItemProps };
