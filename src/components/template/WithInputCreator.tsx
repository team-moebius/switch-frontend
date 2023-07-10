import React, { ReactNode } from 'react';
import { Box, Flexbox, TextInput } from '../atom';
import { InputProps } from '../atom/TextInput';
import { FlexWrap } from 'src/@types/unit';

interface WithInputCreatorProps extends InputProps {
  items: ReactNode;
  itemsWrap?: FlexWrap;
  children?: ReactNode;
}

const WithInputCreator = ({
  items,
  name,
  onChangeText,
  placeholder,
  value,
  width,
  disabled,
  itemsWrap = 'wrap',
}: WithInputCreatorProps) => {
  return (
    <Box width={width}>
      <TextInput
        name={name}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        width={width}
        disabled={disabled}
      />
      <Flexbox gap={5} flexWrap={itemsWrap}>
        {items}
      </Flexbox>
    </Box>
  );
};

export { WithInputCreator, WithInputCreatorProps };
