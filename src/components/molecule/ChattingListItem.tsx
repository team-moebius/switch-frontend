import React, { useMemo } from 'react';
import {
  WithSwitchList,
  agoAlignStyle,
  agoPositionStyle,
  messagePositionStyle,
} from '../template/WithSwitchList';
import { Pressable } from 'react-native';
import { WithSwitchItem } from '../template';
import { listDirectionStyle } from '../template/SwitchList';

interface ChattingListItemProps {
  data: {
    username: string;
    selectedItem: string;
    message: string;
    ago: string;
  };
  onPress?: () => void;
  agoPosition?: keyof typeof agoPositionStyle;
  agoAlign?: keyof typeof agoAlignStyle;
  messagePosition?: keyof typeof messagePositionStyle;
  listDirection?: keyof typeof listDirectionStyle;
}

const renderChildren = (children: string) => {
  return <WithSwitchItem name={children} nameFontSize={'cardList'} />;
};

const ChattingListItem = ({
  data,
  onPress,
  agoPosition,
  agoAlign,
  listDirection,
  messagePosition,
}: ChattingListItemProps) => {
  const { username, selectedItem, message, ago } = data;

  const childrenA = useMemo(() => {
    return renderChildren(username);
  }, [username]);

  const childrenB = useMemo(() => {
    return renderChildren(selectedItem);
  }, [selectedItem]);

  return (
    <Pressable onPress={onPress}>
      <WithSwitchList
        childrenA={childrenA}
        childrenB={childrenB}
        message={message}
        ago={ago}
        agoPosition={agoPosition}
        agoAlign={agoAlign}
        listDirection={listDirection}
        messagePosition={messagePosition}
      />
    </Pressable>
  );
};

export { ChattingListItem, ChattingListItemProps };
