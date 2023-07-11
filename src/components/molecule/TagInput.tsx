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
  name,
  onChangeText,
  value,
  disabled,
  itemsWrap,
  inputPosition,
  itemsPosition: tagsPosition,
  width,
  children,
  tags,
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
      inputPosition={inputPosition}
      itemsPosition={tagsPosition}
      children={children}
      items={tags.map(({ children, ...props }) => (
        <Tag {...props}>{children}</Tag>
      ))}
    />
  );
};

export { TagInput };
