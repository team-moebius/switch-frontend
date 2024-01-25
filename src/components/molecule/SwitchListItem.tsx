import { useMemo } from 'react';
import { Button, Flexbox, Icon, Typography } from '../atom';
import { WithImage } from '../template';
import { fontSizeStyle } from '../template/WithImage';
import { WithMirror, mirrorDirectionStyle } from '../template/WithMirror';

export type ItemDetail = {
  name?: string;
  src?: string;
};

export type Data = {
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
  fontSize?: keyof typeof fontSizeStyle
) => {
  return (
    <Flexbox>
      <WithImage
        text={item?.name}
        src={item?.src || ''}
        fontSize={fontSize}
        imageWidth={100}
        imageHeight={100}
        imageResizeMode={'center'}
        layoutStyle={{
          mostOutlineLayout: {},
          titleContainerLayout: {
            maxWidth: '70%',
          },
          textBoxLayout: {},
        }}
      />
    </Flexbox>
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
    () => renderChildren(myItem, fontSize),
    [myItem, fontSize]
  );
  const childrenB = useMemo(
    () => renderChildren(selectedItem, fontSize),
    [selectedItem, fontSize]
  );

  return (
    <Flexbox
      gap={20}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Flexbox justifyContent='center'>
        <WithMirror
          renderItem={[childrenA, childrenB]}
          mirrorDirection={mirrorDirection}
          centerAxis={<Icon name={'code-outline'} size={20} />}
        />
      </Flexbox>
      <Flexbox justifyContent='center'>
        <Button type={'transparent'} size={'medium'} onPress={onPress}>
          <Typography fontSize={15} color={'blue'}>
            평가 남기기
          </Typography>
        </Button>
      </Flexbox>
    </Flexbox>
  );
};

export { SwitchListItem, SwitchListItemProps };
