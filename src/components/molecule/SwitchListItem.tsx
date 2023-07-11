import React, { useMemo } from 'react';
import { Button, Flexbox, Typography } from '../atom';
import { SwitchList, listDirectionStyle } from '../template/SwitchList';
import { WithSwitchItem } from '../template';
import {
  itemJustifyStyle,
  nameFontSizeStyle,
} from '../template/WithSwitchItem';

export type ItemDetail = {
  name?: string;
  src?: string;
};

type Data = {
  myItem: ItemDetail;
  selectedItem: ItemDetail;
};

type MyData = {
  [Key in keyof Data]: ItemDetail;
};

interface SwitchListItemProps {
  data: MyData;
  onPress: () => void;
  itemJustify?: keyof typeof itemJustifyStyle;
  nameFontSize?: keyof typeof nameFontSizeStyle;
  listDirection?: keyof typeof listDirectionStyle;
}

const renderChildren = (item: any) => {
  const { myItem, itemJustify, nameFontSize } = item;
  return (
    <WithSwitchItem
      name={myItem?.name}
      src={myItem?.src}
      nameFontSize={nameFontSize}
      itemJustify={itemJustify}
      imageWidth={100}
      imageHeight={100}
      imageResizeMode={'center'}
    />
  );
};

const SwitchListItem = ({
  data,
  onPress,
  listDirection,
  itemJustify,
  nameFontSize,
}: SwitchListItemProps) => {
  const { myItem, selectedItem } = data;

  const childrenA = useMemo(
    () => renderChildren({ myItem, itemJustify, nameFontSize }),
    [myItem]
  );
  const childrenB = useMemo(
    () => renderChildren({ selectedItem, itemJustify, nameFontSize }),
    [selectedItem]
  );

  return (
    <Flexbox gap={20} flexDirection={'column'}>
      <Flexbox.Item>
        <SwitchList
          childrenA={childrenA}
          childrenB={childrenB}
          listDirection={listDirection}
          iconName={'code-outline'}
          iconSize={20}
        />
      </Flexbox.Item>
      <Flexbox.Item>
        <Button type={'transparent'} size={'middle'} onPress={onPress}>
          <Typography fontSize={15} color={'blue'}>
            평가남기기
          </Typography>
        </Button>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { SwitchListItem, SwitchListItemProps };
