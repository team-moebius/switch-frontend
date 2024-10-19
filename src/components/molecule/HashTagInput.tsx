import React from 'react';

import { Tag } from '../atom';
import { WithInputCreator } from '../template';

import { TagProps } from '../atom/Tag';
import { WithInputCreatorProps } from '../template/WithInputCreator';

interface HashtagInputProps extends Omit<WithInputCreatorProps, 'items'> {
  hashtags: TagProps[];
}

const HashtagInput = ({
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
  hashtags,
  onSubmitEditing,
}: HashtagInputProps) => {
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
      items={hashtags.map(({ children, ...props }, index) => (
        <Tag key={index + children} {...props}>
          {children}
        </Tag>
      ))}
    />
  );
};

export { HashtagInput };
