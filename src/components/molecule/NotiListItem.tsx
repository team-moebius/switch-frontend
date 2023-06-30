import React from 'react';
import { Flexbox, Icon, Typography } from '../atom';

interface NotiListItemProps {
  ago: string | number;
  children: string;
}

const NotiListItem = ({ ago, children, ...props }: NotiListItemProps) => {
  return (
    <Flexbox gap={10} flexDirection='column'>
      <Flexbox gap={10}>
        <Flexbox.Item>
          <Icon name='megaphone-outline' size={20} />
        </Flexbox.Item>
        <Flexbox.Item alignSelf='center' flexWrap='wrap'>
          <Typography fontSize={13}>{children}</Typography>
        </Flexbox.Item>
      </Flexbox>
      <Flexbox.Item pl={34}>
        <Typography fontSize={13}>{ago}</Typography>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { NotiListItem };
