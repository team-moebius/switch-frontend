import React from 'react';
import { Flexbox, Typography } from '../atom';
import { SwitchList, SwitchListProps } from './SwitchList';
import { Pressable, StyleSheet } from 'react-native';

interface WithSwitchListProps extends SwitchListProps {
  message?: string;
  ago?: string;
  isUnread?: boolean;
  agoAlign?: keyof typeof agoAlignStyle;
  agoPosition?: keyof typeof agoPositionStyle;
  onPress?: () => void;
}

const agoPositionStyle = StyleSheet.create({
  default: {
    flexDirection: undefined,
    gap: 20,
  },
  column: {
    flexDirection: 'column',
    gap: 10,
  },
});

const agoAlignStyle = StyleSheet.create({
  default: {
    alignSelf: undefined,
  },
  center: {
    alignSelf: 'center',
  },
});

const WithSwitchList = ({
  childrenA,
  childrenB,
  message,
  ago,
  isUnread,
  agoAlign = 'default',
  agoPosition = 'default',
  onPress,
}: WithSwitchListProps) => {
  return (
    <Pressable onPress={onPress}>
      <Flexbox {...agoPositionStyle[agoPosition]}>
        <Flexbox flexDirection={'column'} gap={10}>
          <Flexbox.Item>
            <SwitchList
              childrenA={childrenA}
              childrenB={childrenB}
              listDirection={'default'}
              iconName={'code-outline'}
              iconSize={20}
            />
          </Flexbox.Item>
          <Flexbox.Item>
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
        {ago && (
          <Flexbox.Item {...agoAlignStyle[agoAlign]}>
            <Typography fontSize={13}>{ago}</Typography>
          </Flexbox.Item>
        )}
      </Flexbox>
    </Pressable>
  );
};

export { WithSwitchList, WithSwitchListProps };
