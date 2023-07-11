import React from 'react';
import { Flexbox, Typography } from '../atom';
import { SwitchList, SwitchListProps } from './SwitchList';
import { StyleSheet } from 'react-native';

interface WithSwitchListProps extends SwitchListProps {
  message?: string;
  ago?: string;
  isUnread?: boolean;
  agoAlign?: keyof typeof agoAlignStyle;
  agoPosition?: keyof typeof agoPositionStyle;
  messagePosition?: keyof typeof messagePositionStyle;
}

export const agoPositionStyle = StyleSheet.create({
  top: {
    flexDirection: 'column-reverse',
    gap: 10,
  },
  right: {
    flexDirection: 'row',
    gap: 20,
  },
  bottom: {
    flexDirection: 'column',
    gap: 10,
  },
  left: {
    flexDirection: 'row-reverse',
    gap: 20,
  },
});

export const agoAlignStyle = StyleSheet.create({
  noAlign: {
    alignSelf: undefined,
  },
  center: {
    alignSelf: 'center',
  },
});

export const messagePositionStyle = StyleSheet.create({
  top: {
    flexDirection: 'column-reverse',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'column',
  },
  left: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
});

const WithSwitchList = ({
  childrenA,
  childrenB,
  message,
  ago,
  isUnread,
  agoAlign = 'noAlign',
  agoPosition = 'bottom',
  listDirection = 'row',
  messagePosition = 'bottom',
}: WithSwitchListProps) => {
  return (
    <Flexbox {...agoPositionStyle[agoPosition]}>
      <Flexbox.Item flex={1}>
        <Flexbox gap={10} {...messagePositionStyle[messagePosition]}>
          <Flexbox.Item>
            <SwitchList
              childrenA={childrenA}
              childrenB={childrenB}
              listDirection={listDirection}
              iconName={'code-outline'}
              iconSize={20}
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
        <Flexbox.Item {...agoAlignStyle[agoAlign]}>
          <Typography fontSize={13}>{ago}</Typography>
        </Flexbox.Item>
      )}
    </Flexbox>
  );
};

export { WithSwitchList, WithSwitchListProps };
