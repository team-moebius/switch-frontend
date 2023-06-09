import React from 'react';
import { Box, Flexbox, Tag, TextInput, Typography } from '../atom';
import { InputProps } from '../atom/TextInput';
import { TagProps } from '../atom/Tag';
import { ScrollView } from 'react-native';

interface TagInputProps
  extends Omit<InputProps, 'name' | 'width'>,
    Pick<TagProps, 'onPress'> {
  tags: string[];
  width?: number;
}

const TAG_LIMIT = 20;

const TagInput = ({
  value,
  onChangeText,
  placeholder = '스위치를 희망하는 물품이나 종류를 작성해주세요.',
  width = 300,
  onPress,
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
      <Flexbox flexDirection={'row'} mt={10} gap={10}>
        <Flexbox.Item flex={1}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Flexbox gap={5}>
              {tags.map((tag) => {
                return (
                  <Flexbox.Item alignSelf='center'>
                    <Tag
                      color={'white'}
                      backgroundColor={'#797979'}
                      onPress={onPress}
                    >
                      {tag}
                    </Tag>
                  </Flexbox.Item>
                );
              })}
            </Flexbox>
          </ScrollView>
        </Flexbox.Item>
        <Flexbox.Item>
          <Typography children={`${tags.length}/${TAG_LIMIT}`} />
        </Flexbox.Item>
      </Flexbox>
    </Box>
  );
};

export { TagInput };
