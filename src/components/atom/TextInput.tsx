import React from 'react';
import { TextInput as BasicInput, StyleSheet } from 'react-native';

interface InputProps {
  name: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  value: string | undefined;
  width: number;
  disabled?: boolean;
}

const style = StyleSheet.create({
  defaultInput: {
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

const TextInput = ({ width, ...props }: InputProps) => {
  return <BasicInput {...props} style={[style.defaultInput, { width }]} />;
};

export { TextInput, InputProps };
