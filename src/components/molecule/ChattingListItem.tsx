import React, { useMemo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Flexbox, Icon, Typography } from '../atom';
import { WithMirror, mirrorDirectionStyle } from '../template/WithMirror';
import { fontSizeStyle } from '../template/WithImage';

interface ChattingListItemProps {
  data: {
    username: string;
    selectedItem: string;
    message: string;
    ago: string;
    isUnread: boolean;
  };
  onPress?: () => void;
  fontSize?: keyof typeof fontSizeStyle;
  mirrorDirection?: keyof typeof mirrorDirectionStyle;
}

export const widthStyle = StyleSheet.create({
  withAgo: {
    maxWidth: '90%',
  },
});

const renderChildren = (
  children: string,
  fontSize: keyof typeof fontSizeStyle
) => {
  return (
    <Typography {...fontSizeStyle[fontSize]} numberOfLines={6}>
      {children}
    </Typography>
  );
};

const ChattingListItem = ({
  data,
  onPress,
  fontSize = 'cardList',
  mirrorDirection,
}: ChattingListItemProps) => {
  const {
    username = '',
    selectedItem = '',
    message = '',
    ago = '',
    isUnread = false,
  } = data;

  const childrenA = useMemo(() => {
    return renderChildren(username, fontSize);
  }, [username, fontSize]);

  const childrenB = useMemo(() => {
    return renderChildren(selectedItem, fontSize);
  }, [selectedItem, fontSize]);

  return (
    <Pressable onPress={onPress}>
      <Flexbox flexDirection={'row'} gap={20}>
        <Flexbox.Item flex={1}>
          <Flexbox gap={10} flexDirection={'column'} {...widthStyle['withAgo']}>
            <Flexbox.Item>
              <WithMirror
                children={[childrenA, childrenB]}
                mirrorDirection={mirrorDirection}
                centerAxis={<Icon name={'code-outline'} size={20} />}
              />
            </Flexbox.Item>
            <Flexbox.Item flex={1}>
              <Flexbox gap={10}>
                {isUnread && (
                  <Flexbox.Item
                    width={6}
                    height={6}
                    backgroundColor={'red'}
                    borderRadius={50}
                  />
                )}
                <Flexbox.Item flex={1}>
                  <Typography
                    fontSize={15}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                    {message}
                  </Typography>
                </Flexbox.Item>
              </Flexbox>
            </Flexbox.Item>
          </Flexbox>
        </Flexbox.Item>
        <Flexbox.Item alignSelf={'center'}>
          <Typography fontSize={13}>{ago}</Typography>
        </Flexbox.Item>
      </Flexbox>
    </Pressable>
  );
};

export { ChattingListItem, ChattingListItemProps };