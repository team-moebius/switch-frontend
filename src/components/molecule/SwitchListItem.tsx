import React, { ReactNode, useMemo } from 'react';
import { Button, Flexbox, Icon, Image, Typography } from '../atom';
import { SwitchList } from '../template/SwitchList';

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

const SwitchListItem = ({ data, onPress }: SwitchListItemProps) => {
  const { myItem, selectedItem } = data;

  const childrenA = useMemo(() => {
    return (
      <Flexbox gap={20} alignItems='center' justifyContent='center'>
        <Flexbox.Item>
          <Image
            src={String(myItem.src)}
            width={100}
            height={100}
            resizeMode='center'
          />
        </Flexbox.Item>
        <Flexbox.Item alignSelf='center'>
          <Typography fontSize={13}>{String(myItem?.name)}</Typography>
        </Flexbox.Item>
      </Flexbox>
    );
  }, []);

  const childrenB = useMemo(() => {
    return (
      <Flexbox gap={20} alignItems='center' justifyContent='center'>
        <Flexbox.Item>
          <Image
            src={String(selectedItem.src)}
            width={100}
            height={100}
            resizeMode='center'
          />
        </Flexbox.Item>
        <Flexbox.Item alignSelf='center'>
          <Typography fontSize={13}>{String(selectedItem?.name)}</Typography>
        </Flexbox.Item>
      </Flexbox>
    );
  }, []);

  return (
    <Flexbox gap={20} flexDirection='column'>
      <SwitchList
        childrenA={childrenA as ReactNode}
        childrenB={childrenB as ReactNode}
        listDirection={'column'}
        iconName={'code-outline'}
        iconSize={20}
      />
      <Flexbox.Item>
        <Button type='transparent' size='middle' onPress={onPress}>
          <Typography fontSize={15} color='blue'>
            평가남기기
          </Typography>
        </Button>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { SwitchListItem, SwitchListItemProps };

//Flexbox.Item은 Flexbox 안에 들어가는 요소를 모두 감싸주어야 하는 건지?
