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
  const { ago, children, iconName = 'megaphone-outline', iconSize = 20 } = data;
  return (
    <Pressable onPress={onPress}>
      <Flexbox flexDirection={'column'} gap={10}>
        <Flexbox gap={10}>
          <Flexbox.Item>
            <Icon name={iconName} size={iconSize} />
          </Flexbox.Item>
          <Flexbox.Item alignSelf={'center'} flexWrap={'wrap'}>
            <Typography fontSize={13}>{String(children)}</Typography>
          </Flexbox.Item>
        </Flexbox>
        <Flexbox.Item>
          <Typography fontSize={13}>{String(ago)}</Typography>
        </Flexbox.Item>
      </Flexbox>
    </Pressable>
  );
};

export { NotiListItem, NotiListItemProps };

// 생김새는 WithSwitchItem 이랑 비슷하지만 역할이 너무 달라서 공통으로 빼지 않았음
// iconName, iconSize는 prop으로 받아오게 했는데, fontSize도 prop으로 받는게 좋지 않을까?
// 아니면 이런 것들은 추후에 template으로 빼야 할 때 prop으로 받도록 하면 될까?
