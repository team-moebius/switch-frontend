import React from 'react';
import { Flexbox, Icon, Typography } from '../atom';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FONT_SIZE } from 'src/assets/theme/base';

interface NotiListItemProps {
  data: {
    ago?: string;
    notification?: string;
    iconName?: keyof typeof Ionicons.glyphMap;
    iconSize?: 20 | 24 | 32;
  };
  onPress?: () => void;
}

const NotiListItem = ({ data, onPress }: NotiListItemProps) => {
  const {
    ago = '',
    notification = '',
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
          <Flexbox.Item alignSelf={'center'} flex={1}>
            <Typography fontSize={FONT_SIZE.smaller} numberOfLines={3}>
              {notification}
            </Typography>
          </Flexbox.Item>
        </Flexbox>
        <Flexbox.Item pl={iconSize + 14}>
          <Typography fontSize={FONT_SIZE.smaller}>{ago}</Typography>
        </Flexbox.Item>
      </Flexbox>
    </Pressable>
  );
};

export { NotiListItem, NotiListItemProps };
