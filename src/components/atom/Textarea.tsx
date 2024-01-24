import React from 'react';
import { StyleSheet, TextInput, TextStyle, ViewStyle } from 'react-native';

interface TextareaProps {
  editable?: boolean;
  maxLength?: number;
  onChangeText?: (value: string) => void;
  value?: string;
  placeholder?: string;
  style?: ViewStyle | TextStyle;
}

const { default: defaultStyles } = StyleSheet.create({
  default: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
});

const Textarea = ({ maxLength = 100, style, ...props }: TextareaProps) => {
  return (
    <TextInput
      {...props}
      style={[defaultStyles, style]}
      maxLength={maxLength}
      multiline
    />
  );
};

export { Textarea, TextareaProps };
