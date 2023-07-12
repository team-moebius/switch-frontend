import React from 'react';
import { Flexbox, Icon, Typography } from '../atom';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface NotiListItemProps {
  data: {
    ago?: string;
    children?: string;
    iconName?: keyof typeof Ionicons.glyphMap;
    iconSize?: 20 | 24 | 32;
  };
  onPress?: () => void;
}

const NotiListItem = ({ data, onPress }: NotiListItemProps) => {
  const {
    ago = '',
    children = '',
    iconName = 'megaphone-outline',
    iconSize = 20,
  } = data;
  return (
    <Pressable onPress={onPress}>
      <Flexbox flexDirection={'column'} gap={10}>
        <Flexbox gap={10}>
          <Flexbox.Item>
            <Icon name={iconName} size={iconSize} />
          </Flexbox.Item>
          <Flexbox.Item alignSelf={'center'}>
            <Typography fontSize={13}>{children}</Typography>
          </Flexbox.Item>
        </Flexbox>
        <Flexbox.Item>
          <Typography fontSize={13}>{ago}</Typography>
        </Flexbox.Item>
      </Flexbox>
    </Pressable>
  );
};

export { NotiListItem, NotiListItemProps };
