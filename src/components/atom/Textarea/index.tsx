import React from 'react';
import { StyleSheet, TextInput, TextStyle } from 'react-native';

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
      | 'fontSize'
      | 'fontFamily'
      | 'fontWeight'
      | 'fontStyle'
      | 'height'
      | 'maxHeight'
      | 'maxWidth'
      | 'borderRadius'
      | 'borderStyle'
      | 'padding'
    >
  >;
}

const Textarea = ({ maxLength = 100, style, ...props }: TextareaProps) => {
  return (
    <TextInput
      {...props}
      style={[defaultStyles, style]}
      maxLength={maxLength}
      multiline
      placeholderTextColor={'gray'}
    />
  );
};

const { default: defaultStyles } = StyleSheet.create({
  default: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    paddingHorizontal: '10px',
    paddingVertical: '20px',
    border: 'none',
  },
});

export default Textarea;
