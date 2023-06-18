import React from 'react';
import { Box, Flexbox, Tag, TextInput, Typography } from '../atom';
import { InputProps } from '../atom/TextInput';
import { TagProps } from '../atom/Tag';
import { LengthElement } from 'src/@types/unit';

interface TagInputProps extends Omit<InputProps, 'name' | 'width'> {
  tags: TagProps[];
  width?: LengthElement;
}

const TAG_LIMIT = 20;

const TagInput = ({
  value,
  onChangeText,
  placeholder = '스위치를 희망하는 물품이나 종류를 작성해주세요.',
  width = 300,
  tags,
  disabled,
}: TagInputProps) => {
  return (
    <Box width={width}>
      <TextInput
        name={'tagInput'}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        width={width}
        disabled={disabled}
      />
      <Flexbox mt={5}>
        <Flexbox.Item flex={1}>
          <Flexbox gap={5} flexWrap='wrap'>
            {tags.map(({ onPress, backgroundColor, color, children }) => {
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
          <Typography children={`${tags.length}/${TAG_LIMIT}`} />
        </Flexbox.Item>
      </Flexbox>
    </Box>
  );
};

export { TagInput };
