import React, { useMemo } from 'react';
import { Pressable } from 'react-native';
import { WithImage } from '../template';
import { Flexbox, Icon, Typography } from '../atom';
import { WithMirror, mirrorDirectionStyle } from '../template/WithMirror';

interface ChattingListItemProps {
  data: {
    username: string;
    selectedItem: string;
    message: string;
    ago: string;
    isUnread: boolean;
  };
  onPress?: () => void;
  mirrorDirection?: keyof typeof mirrorDirectionStyle;
}

const renderChildren = (children: string) => {
  return <WithImage name={children} nameFontSize={'cardList'} />;
};

const ChattingListItem = ({
  data,
  onPress,
  mirrorDirection,
}: ChattingListItemProps) => {
  const { username, selectedItem, message, ago, isUnread = false } = data;

  const childrenA = useMemo(() => {
    return renderChildren(username);
  }, [username]);

  const childrenB = useMemo(() => {
    return renderChildren(selectedItem);
  }, [selectedItem]);

  return (
    <Pressable onPress={onPress}>
      <Flexbox flexDirection={'row'} gap={20}>
        <Flexbox.Item flex={1}>
          <Flexbox gap={10} flexDirection={'column'}>
            <Flexbox.Item>
              <WithMirror
                children={[childrenA, childrenB]}
                mirrorDirection={mirrorDirection}
                centerAxis={<Icon name={'code-outline'} size={20} />}
              />
            </Flexbox.Item>
            <Flexbox.Item flex={1}>
              {message && (
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
              )}
            </Flexbox.Item>
          </Flexbox>
        </Flexbox.Item>
        {ago && (
          <Flexbox.Item alignSelf={'center'}>
            <Typography fontSize={13}>{ago}</Typography>
          </Flexbox.Item>
        )}
      </Flexbox>
    </Pressable>
  );
};

export { ChattingListItem, ChattingListItemProps };
