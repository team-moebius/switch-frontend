import React from 'react';
import { StyleSheet, TextInput, ViewStyle } from 'react-native';

interface TextareaProps {
  editable?: boolean;
  maxLength?: number;
  onChangeText?: (value: string) => void;
  value?: string;
  placeholder?: string;
  customStyle: ViewStyle;
}

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

const Textarea = ({
  maxLength = 100,
  customStyle,
  ...props
}: TextareaProps) => {
  return (
    <TextInput
      {...props}
      style={[defaultStyles, customStyle]}
      maxLength={maxLength}
      multiline
      placeholderTextColor={'gray'}
    />
  );
};

export { Textarea, TextareaProps };
