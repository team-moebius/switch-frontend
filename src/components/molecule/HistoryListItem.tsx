import React, { useMemo } from 'react';
import { Pressable } from 'react-native';
import { WithImage } from '../template';
import { Flexbox, Icon, Typography } from '../atom';
import { WithMirror, mirrorDirectionStyle } from '../template/WithMirror';

interface HistoryListItemProps {
  data: {
    myItem: string;
    selectedItem: string;
    ago: string;
  };
  onPress?: () => void;
  mirrorDirection?: keyof typeof mirrorDirectionStyle;
}

const renderChildren = (children: string) => {
  return <WithImage content={children} fontSize={'cardList'} />;
};

const HistoryListItem = ({
  data,
  onPress,
  mirrorDirection,
}: HistoryListItemProps) => {
  const { myItem, selectedItem, ago } = data;

  const childrenA = useMemo(() => {
    return renderChildren(myItem);
  }, [myItem]);

  const childrenB = useMemo(() => {
    return renderChildren(selectedItem);
  }, [selectedItem]);

  return (
    <Pressable onPress={onPress}>
      <Flexbox flexDirection={'column'} gap={10}>
        <Flexbox.Item flex={1}>
          <Flexbox>
            <Flexbox.Item>
              <WithMirror
                children={[childrenA, childrenB]}
                mirrorDirection={mirrorDirection}
                centerAxis={<Icon name={'code-outline'} size={20} />}
              />
            </Flexbox.Item>
          </Flexbox>
        </Flexbox.Item>
        {ago && (
          <Flexbox.Item>
            <Typography fontSize={13}>{ago}</Typography>
          </Flexbox.Item>
        )}
      </Flexbox>
    </Pressable>
  );
};

export { HistoryListItem, HistoryListItemProps };
