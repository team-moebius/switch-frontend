import React from 'react';
import { WithTag, WithTagProps } from '../template/WithTag';

interface TagInputProps extends WithTagProps {}

const TagInput = ({
  value,
  onChangeText,
  placeholder = '스위치를 희망하는 물품이나 종류를 작성해주세요.',
  width = 300,
  tags,
  disabled,
  tagsLimit,
}: TagInputProps) => {
  return (
    <WithTag
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      width={width}
      tags={tags}
      disabled={disabled}
      tagsLimit={tagsLimit}
    />
  );
};

export { TagInput };
