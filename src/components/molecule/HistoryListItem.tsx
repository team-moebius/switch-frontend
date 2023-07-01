import React from 'react';
import { Flexbox, Icon, Typography } from '../atom';

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
    <Flexbox>
      <Flexbox flexDirection='column' gap={20}>
        <Flexbox gap={10} alignItems='center'>
          <Flexbox.Item>
            <Typography fontSize={15}>{myItem}</Typography>
          </Flexbox.Item>
          <Flexbox.Item>
            <Icon name='code-outline' size={20} />
          </Flexbox.Item>
          <Flexbox.Item>
            <Typography fontSize={15}>{selectedItem}</Typography>
          </Flexbox.Item>
        </Flexbox>
        <Flexbox gap={10}></Flexbox>
      </Flexbox>
      <Flexbox.Item>
        <Typography fontSize={13}>{ago}</Typography>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { HistoryListItem, HistoryListItemProps };
