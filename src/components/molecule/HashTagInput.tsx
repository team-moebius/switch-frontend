import React from 'react';

import { Tag } from '../atom';
import { WithInputCreator } from '../template';

import { TagProps } from '../atom/Tag';
import { WithInputCreatorProps } from '../template/WithInputCreator';

interface HashTagInputProps extends Omit<WithInputCreatorProps, 'items'> {
  hashTags: TagProps[];
}

const HashTagInput = ({
  placeholder,
  name,
  onChangeText,
  value,
  disabled,
  itemsWrap,
  inputPosition,
  itemsPosition: tagsPosition,
  width,
  functionalElement: children,
  hashTags,
  onSubmitEditing,
}: HashTagInputProps) => {
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
      onSubmitEditing={onSubmitEditing}
      functionalElement={children}
      items={hashTags.map(({ children, ...props }, index) => (
        <Tag key={index + children} {...props}>
          {children}
        </Tag>
      ))}
    />
  );
};

export { HashTagInput };
