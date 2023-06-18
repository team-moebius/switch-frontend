import React from 'react';
import { WithTag, WithTagProps } from '../template/WithTag';

// interface
interface HashTagInputProps extends WithTagProps {}

// default style

const HashTagInput = ({
  value,
  onChangeText,
  placeholder = '물품에 대한 해시태그를 작성해주세요.(선택사항)',
  width = 300,
  tags,
  disabled,
  tagsLimit,
}: HashTagInputProps) => {
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

export { HashTagInput };
