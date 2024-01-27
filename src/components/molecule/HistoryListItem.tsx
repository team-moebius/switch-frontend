import React, { useMemo } from 'react';
import { Pressable } from 'react-native';
import { Flexbox, Icon, Typography } from '../atom';
import { WithMirror, mirrorDirectionStyle } from '../template/WithMirror';
import { fontSizeStyle } from '../template/WithImage';

interface HistoryListItemProps {
  data: {
    myItem: string;
    selectedItem: string;
    ago?: string;
  };
  onPress?: () => void;
  fontSize?: keyof typeof fontSizeStyle;
  mirrorDirection?: keyof typeof mirrorDirectionStyle;
  disabled?: boolean;
}

const renderChildren = (
  children: string,
  fontSize: keyof typeof fontSizeStyle
) => {
  return (
    <Typography {...fontSizeStyle[fontSize]} numberOfLines={1}>
      {children}
    </Typography>
  );
};

const HistoryListItem = ({
  data,
  onPress,
  fontSize = 'cardList',
  mirrorDirection,
  disabled,
}: HistoryListItemProps) => {
  const { myItem, selectedItem, ago } = data;

  const childrenA = useMemo(() => {
    return renderChildren(myItem, fontSize);
  }, [myItem, fontSize]);

  const childrenB = useMemo(() => {
    return renderChildren(selectedItem, fontSize);
  }, [selectedItem, fontSize]);

  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <Flexbox flexDirection={'column'} gap={ago ? 10 : 0}>
        <Flexbox.Item width={'100%'}>
          <Flexbox>
            <Flexbox.Item width={'100%'}>
              <WithMirror
                renderItem={[childrenA, childrenB]}
                mirrorDirection={mirrorDirection}
                centerAxis={<Icon name={'swap-horizontal'} size={20} />}
              />
            </Flexbox.Item>
          </Flexbox>
        </Flexbox.Item>
        <Flexbox.Item width={'100%'}>
          {ago && <Typography fontSize={13}>{ago}</Typography>}
        </Flexbox.Item>
      </Flexbox>
    </Pressable>
  );
};

export { HistoryListItem, HistoryListItemProps };
