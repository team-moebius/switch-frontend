import React, { useMemo } from 'react';
import { Button, Flexbox, Typography } from '../atom';
import { SwitchList, listDirectionStyle } from '../template/SwitchList';
import { WithSwitchItem } from '../template';
import { nameFontSizeStyle } from '../template/WithSwitchItem';
import { FlexAlign, FlexDirection, JustifyContent } from 'src/@types/unit';

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
  nameFontSize?: keyof typeof nameFontSizeStyle;
  listDirection?: keyof typeof listDirectionStyle;
  flexDirection?: FlexDirection;
  alignItems?: FlexAlign;
  justifyContent?: JustifyContent;
}

const renderChildren = (
  item: ItemDetail,
  nameFontSize: keyof typeof nameFontSizeStyle = 'switchList'
) => {
  return (
    <WithSwitchItem
      name={item?.name}
      src={item?.src}
      nameFontSize={nameFontSize}
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
  nameFontSize,
  flexDirection,
  alignItems,
  justifyContent,
}: SwitchListItemProps) => {
  const { myItem, selectedItem } = data;

  const childrenA = useMemo(
    () => renderChildren(myItem, nameFontSize),
    [myItem, nameFontSize]
  );
  const childrenB = useMemo(
    () => renderChildren(selectedItem, nameFontSize),
    [selectedItem, nameFontSize]
  );

  return (
    <Flexbox
      gap={20}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
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
