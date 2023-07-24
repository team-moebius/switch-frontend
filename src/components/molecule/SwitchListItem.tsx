import React, { useMemo } from 'react';
import { Button, Flexbox, Icon, Typography } from '../atom';
import { WithImage } from '../template';
import { nameFontSizeStyle } from '../template/WithImage';
import { WithMirror, mirrorDirectionStyle } from '../template/WithMirror';

export type ItemDetail = {
  name?: string;
  src?: string;
};

type Data = {
  myItem: ItemDetail;
  selectedItem: ItemDetail;
};

interface SwitchListItemProps {
  data: Data;
  onPress: () => void;
  nameFontSize?: keyof typeof nameFontSizeStyle;
  mirrorDirection?: keyof typeof mirrorDirectionStyle;
}

const renderChildren = (
  item: ItemDetail,
  nameFontSize?: keyof typeof nameFontSizeStyle
) => {
  return (
    <WithImage
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
  mirrorDirection,
  nameFontSize,
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
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Flexbox.Item>
        <WithMirror
          children={[childrenA, childrenB]}
          mirrorDirection={mirrorDirection}
          centerAxis={<Icon name={'code-outline'} size={20} />}
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
