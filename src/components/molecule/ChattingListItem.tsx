import React from 'react';
import { Flexbox, Icon, Typography } from '../atom';
import { ItemDetail } from './SwitchListItem';

interface ChattingListItemProps {
  data: {
    username: string;
    selectedItem: string;
    message: string;
    ago: string;
  };
}

const ChattingListItem = ({ data, ...props }: ChattingListItemProps) => {
  const { username, selectedItem, message, ago } = data;
  return (
    <Flexbox>
      <Flexbox flexDirection='column' gap={20}>
        <Flexbox gap={10} alignItems='center'>
          <Flexbox.Item>
            <Typography fontSize={15}>{username}</Typography>
          </Flexbox.Item>
          <Flexbox.Item>
            <Icon name='code-outline' size={20} />
          </Flexbox.Item>
          <Flexbox.Item>
            <Typography fontSize={15}>{selectedItem}</Typography>
          </Flexbox.Item>
        </Flexbox>
        <Flexbox gap={10}>
          <Flexbox.Item
            width={6}
            height={6}
            backgroundColor='red'
            borderRadius={50}
          />
          <Flexbox.Item flex={1}>
            <Typography fontSize={15} numberOfLines={1} ellipsizeMode='tail'>
              {message}
            </Typography>
          </Flexbox.Item>
        </Flexbox>
      </Flexbox>
      <Flexbox.Item alignSelf='center'>
        <Typography fontSize={13}>{ago}</Typography>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { ChattingListItem as ChattingListItem };
