import React from 'react';

import { Tag } from '../atom';
import { WithInputCreator } from '../template';

import { TagProps } from '../atom/Tag';
import { WithInputCreatorProps } from '../template/WithInputCreator';

interface TagInputProps extends Omit<WithInputCreatorProps, 'items'> {
  tags: TagProps[];
}

const TagInput = ({
  placeholder,
  tags,
  itemsWrap,
  name,
  onChangeText,
  value,
  width = 300,
  disabled,
}: TagInputProps) => {
  return (
    <WithInputCreator
      width={width}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChangeText={onChangeText}
      itemsWrap={itemsWrap}
      items={tags.map(({ children, ...props }) => (
        <Tag {...props}>{children}</Tag>
      ))}
    />
  );
};

export { TagInput };
