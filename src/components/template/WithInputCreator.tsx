import React, { ReactNode, useState } from 'react';
import { LengthElement } from 'src/@types/unit';
import { InputProps, TextInput } from '../atom/TextInput';
import { Tag, TagProps } from '../atom/Tag';
import { Box, Flexbox, Typography } from '../atom';
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';

interface WithInputCreator
  extends Pick<InputProps, 'disabled' | 'placeholder'> {
  items: TagProps[]; // TODO : 타입을 좀 더 추상화 하기 -> 아래에서 타입에 따른 분기처리 고려하기
  width?: LengthElement;
  tagsLimit: number;
  onCreateHandler: (value: string) => TagProps[]; // TODO : 입력완료된 Input 값을 특정한 로직으로 처리해서 items에 새로운 값을 넣어주기
}

const WithTag = ({
  onCreateHandler,
  placeholder,
  width = 300,
  items,
  disabled,
  tagsLimit,
}: WithInputCreator) => {
  const [input, setInput] = useState<string>('');
  const onInputhandler = (value: string) => {
    setInput(value);
  };

  const addItemsHandler = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    onCreateHandler(e.nativeEvent.text);
    setInput('');
  };

  return (
    <Box width={width}>
      <TextInput
        name={'tagInput'}
        placeholder={placeholder}
        onChangeText={onInputhandler}
        value={input}
        width={width}
        disabled={disabled}
        onSubmitEditing={addItemsHandler}
      />
      <Flexbox mt={5}>
        <Flexbox.Item flex={1}>
          <Flexbox gap={5} flexWrap='wrap'>
            {items.map(({ onPress, backgroundColor, color, children }) => {
              return (
                <Flexbox.Item alignSelf='center'>
                  <Tag
                    color={color}
                    backgroundColor={backgroundColor}
                    onPress={onPress}
                  >
                    {children}
                  </Tag>
                </Flexbox.Item>
              );
            })}
          </Flexbox>
        </Flexbox.Item>
        <Flexbox.Item>
          <Typography children={`${items.length}/${tagsLimit}`} />
        </Flexbox.Item>
      </Flexbox>
    </Box>
  );
};

export { WithTag, WithInputCreator };
