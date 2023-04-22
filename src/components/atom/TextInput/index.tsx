import React from 'react';
import { TextInput as BasicInput, StyleSheet } from 'react-native';

export interface InputProps {
  name: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  value: string | undefined;
  width: number;
  disabled?: boolean;
}

const TextInput = ({ width, ...props }: InputProps) => {
  return <BasicInput style={[style.input, { width }]} {...props} />;
};

export default TextInput;

const style = StyleSheet.create({
  input: {
    height: 35,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    borderColor: '#cccccc',
    color: '#7a7a7a',
  },
});
