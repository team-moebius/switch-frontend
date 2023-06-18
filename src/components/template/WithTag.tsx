import React from 'react';
import { LengthElement } from 'src/@types/unit';
import { InputProps, TextInput } from '../atom/TextInput';
import { Tag, TagProps } from '../atom/Tag';
import { Box, Flexbox, Typography } from '../atom';

interface WithTagProps extends Omit<InputProps, 'name' | 'width'> {
  tags: TagProps[];
  width?: LengthElement;
  tagsLimit: number;
}

const WithTag = ({
  value,
  onChangeText,
  placeholder,
  width = 300,
  tags,
  disabled,
  tagsLimit,
}: WithTagProps) => {
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
          <Typography children={`${tags.length}/${tagsLimit}`} />
        </Flexbox.Item>
      </Flexbox>
    </Box>
  );
};

export { WithTag, WithTagProps };
