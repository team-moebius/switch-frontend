import React from 'react';
import { Flexbox, Image, Typography } from '../atom';

interface SwitchItemProps {
  src: string;
  name: string;
  location: string;
}

const SwitchItem = ({
  src = '',
  name = '',
  location = '',
}: SwitchItemProps) => {
  return (
    <Flexbox gap={20} alignItems={'center'}>
      <Flexbox.Item>
        <Image width={100} height={70} src={src} resizeMode={'center'} />
      </Flexbox.Item>
      <Flexbox.Item>
        <Flexbox flexDirection={'column'} gap={10}>
          <Flexbox.Item>
            <Typography fontSize={15}>{name}</Typography>
          </Flexbox.Item>
          {location && (
            <Flexbox.Item>
              <Typography fontSize={13}>{location}</Typography>
            </Flexbox.Item>
          )}
        </Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { SwitchItem, SwitchItemProps };
