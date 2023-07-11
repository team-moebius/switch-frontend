import React, { ReactNode, useMemo } from 'react';
import { Button, Flexbox, Typography } from '../atom';
import { SwitchList } from '../template/SwitchList';
import { WithSwitchItem } from '../template';

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
}

const renderChildren = (item: ItemDetail) => {
  return (
    <WithSwitchItem
      name={item?.name}
      src={item.src}
      nameFontSize={'switchList'}
      itemJustify={'center'}
      imageWidth={100}
      imageHeight={100}
      imageResizeMode={'center'}
    />
  );
};

const SwitchListItem = ({ data, onPress }: SwitchListItemProps) => {
  const { myItem, selectedItem } = data;

  const childrenA = useMemo(() => renderChildren(myItem), [myItem]);
  const childrenB = useMemo(() => renderChildren(selectedItem), [selectedItem]);

  return (
    <Flexbox gap={20} flexDirection={'column'}>
      <Flexbox.Item>
        <SwitchList
          childrenA={childrenA as ReactNode}
          childrenB={childrenB as ReactNode}
          listDirection={'column'}
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
