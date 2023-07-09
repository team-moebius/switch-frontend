import React from 'react';
import { Flexbox, Icon, Typography } from '../atom';

interface NotiListItemProps {
  ago?: string;
  children?: string;
}

const NotiListItem = ({ ago, children }: NotiListItemProps) => {
  return (
    <Flexbox flexDirection='column' gap={10}>
      <Flexbox gap={10}>
        <Flexbox.Item>
          <Icon name='megaphone-outline' size={20} />
        </Flexbox.Item>
        <Flexbox.Item alignSelf='center' flexWrap='wrap'>
          <Typography fontSize={13}>{String(children)}</Typography>
        </Flexbox.Item>
      </Flexbox>
      <Flexbox.Item>
        <Typography fontSize={13}>{String(ago)}</Typography>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { NotiListItem, NotiListItemProps };
