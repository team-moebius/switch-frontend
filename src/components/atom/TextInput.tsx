import React from 'react';
import {
  TextInput as BasicInput,
  NativeSyntheticEvent,
  StyleSheet,
  TextInputEndEditingEventData,
} from 'react-native';
import { LengthElement } from 'src/@types/unit';

interface InputProps {
  name: string;
  onChangeText: (value: string) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => void;
  placeholder: string;
  value: string | undefined;
  width: LengthElement;
  disabled?: boolean;
}

const style = StyleSheet.create({
  defaultInput: {
    height: 35,
    width: 250,
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
