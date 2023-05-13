import React from 'react';
import { TextInput, TextStyle } from 'react-native';

interface TextareaProps {
  editable?: boolean;
  maxLength?: number;
  onChangeText?: (value: string) => void;
  value?: string;
  placeholder?: string;
  style?: Partial<
    Pick<
      TextStyle,
      | 'borderColor'
      | 'backgroundColor'
      | 'width'
      | 'height'
      | 'maxHeight'
      | 'maxWidth'
      | 'borderRadius'
      | 'borderStyle'
    >
  >;
}

const Textarea = ({ maxLength = 100, style, ...props }: TextareaProps) => {
  return (
    <TextInput
      style={{ height: 100, ...style }}
      multiline
      {...props}
      maxLength={maxLength}
    />
  );
};

export default Textarea;
