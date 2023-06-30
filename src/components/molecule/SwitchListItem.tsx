import React from 'react';
import { Button, Flexbox, Icon, Image, Typography } from '../atom';

type ItemDetail = {
  name: string;
  src: string;
};

type Data = {
  myItem: ItemDetail;
  selectedItem: ItemDetail;
};

type MyData = {
  [Key in keyof Data]: ItemDetail;
};

// 이렇게 맵드타입으로 써주는게 의미가 있는건가?

interface SwitchListItemProps {
  data: MyData;
  onPress: () => void;
}

const SwitchListItem = ({ data, onPress, ...props }: SwitchListItemProps) => {
  const { myItem, selectedItem } = data;
  return (
    <Flexbox gap={20} flexDirection='column'>
      <Flexbox gap={20} alignItems='center' justifyContent='center'>
        <Flexbox.Item>
          <Image
            src={myItem.src}
            width={100}
            height={100}
            resizeMode='center'
          />
        </Flexbox.Item>
        <Flexbox.Item alignSelf='center'>
          <Typography fontSize={13}>{myItem.name}</Typography>
        </Flexbox.Item>
      </Flexbox>
      <Flexbox.Item alignSelf='center'>
        <Icon name='code-outline' size={20} />
      </Flexbox.Item>
      <Flexbox gap={20} alignItems='center' justifyContent='center'>
        <Flexbox.Item>
          <Image
            src={selectedItem.src}
            width={100}
            height={100}
            resizeMode='center'
          />
        </Flexbox.Item>
        <Flexbox.Item alignSelf='center'>
          <Typography fontSize={13}>{selectedItem.name}</Typography>
        </Flexbox.Item>
      </Flexbox>
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

export { SwitchListItem };

//Flexbox.Item은 Flexbox 안에 들어가는 요소를 모두 감싸주어야 하는 건지?
