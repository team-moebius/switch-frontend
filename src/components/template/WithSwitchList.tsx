import React from 'react';
import { Flexbox, Typography } from '../atom';
import { SwitchList, SwitchListProps } from './SwitchList';
import { FlexAlign } from 'src/@types/unit';
import { StyleSheet } from 'react-native';

interface WithSwitchListProps extends SwitchListProps {
  message?: string;
  ago?: string | number;
  isUnread?: boolean;
  alignSelf?: FlexAlign | 'auto';
}

const style = StyleSheet.create({});

const WithSwitchList = ({
  itemA,
  itemB,
  message,
  ago,
  isUnread,
  alignSelf,
}: WithSwitchListProps) => {
  return (
    <Flexbox gap={20}>
      <Flexbox flexDirection='column' gap={10}>
        <Flexbox.Item>
          <SwitchList itemA={itemA} itemB={itemB} />
        </Flexbox.Item>
        <Flexbox.Item>
          {message && (
            <Flexbox gap={10}>
              {isUnread && (
                <Flexbox.Item
                  width={6}
                  height={6}
                  backgroundColor='red'
                  borderRadius={50}
                />
              )}
              <Flexbox.Item flex={1}>
                <Typography
                  fontSize={15}
                  numberOfLines={1}
                  ellipsizeMode='tail'
                >
                  {message}
                </Typography>
              </Flexbox.Item>
            </Flexbox>
          )}
        </Flexbox.Item>
      </Flexbox>
      {ago && (
        <Flexbox.Item alignSelf={alignSelf}>
          <Typography fontSize={13}>{ago}</Typography>
        </Flexbox.Item>
      )}
    </Flexbox>
  );
};

export default WithSwitchList;
