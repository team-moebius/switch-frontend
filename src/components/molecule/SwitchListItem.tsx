import React, { useMemo } from 'react';
import { Button, Flexbox, Icon, Typography } from '../atom';
import { WithImage } from '../template';
import { fontSizeStyle } from '../template/WithImage';
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
  fontSize?: keyof typeof fontSizeStyle;
  mirrorDirection?: keyof typeof mirrorDirectionStyle;
}

const renderChildren = (
  item: ItemDetail,
  fontSize?: keyof typeof fontSizeStyle,
  mirrorDirection?: keyof typeof mirrorDirectionStyle
) => {
  return (
    <WithImage
      text={item?.name}
      src={item?.src || ''}
      fontSize={fontSize}
      imageWidth={100}
      imageHeight={100}
      imageResizeMode={'center'}
      mirrorDirection={mirrorDirection}
    />
  );
};

const SwitchListItem = ({
  data,
  onPress,
  mirrorDirection,
  fontSize,
}: SwitchListItemProps) => {
  const { myItem, selectedItem } = data;

  const childrenA = useMemo(
    () => renderChildren(myItem, fontSize, mirrorDirection),
    [myItem, fontSize, mirrorDirection]
  );
  const childrenB = useMemo(
    () => renderChildren(selectedItem, fontSize, mirrorDirection),
    [selectedItem, fontSize, mirrorDirection]
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
