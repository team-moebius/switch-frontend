import React from 'react';
import { Flexbox, Icon, Typography } from '../atom';

interface SwitchListProps {
  itemA: string;
  itemB: string;
}

const SwitchList = ({ itemA, itemB }: SwitchListProps) => {
  return (
    <Flexbox gap={10} alignItems='center'>
      <Flexbox.Item>
        <Typography fontSize={15}>{itemA}</Typography>
      </Flexbox.Item>
      <Flexbox.Item>
        <Icon name='code-outline' size={20} />
      </Flexbox.Item>
      <Flexbox.Item>
        <Typography fontSize={15}>{itemB}</Typography>
      </Flexbox.Item>
    </Flexbox>
  );
};

export default SwitchList;
