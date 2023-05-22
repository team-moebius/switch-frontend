import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface TextareaProps {
  editable?: boolean;
  maxLength?: number;
  onChangeText?: (value: string) => void;
  value?: string;
  placeholder?: string;
}

const Textarea = ({ maxLength = 100, ...props }: TextareaProps) => {
  return (
    <TextInput
      {...props}
      style={[defaultStyles]}
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
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default Textarea;
