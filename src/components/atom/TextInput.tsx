import React from 'react';
import {
  TextInput as BasicInput,
  DimensionValue,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  TextInputEndEditingEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface InputProps {
  name: string;
  onChangeText: (value: string) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => void;
  placeholder?: string;
  value: string | undefined;
  width: DimensionValue | undefined;
  disabled?: boolean;
  style?: ViewStyle & TextStyle;
  keyboardType?: KeyboardTypeOptions;
}

const { defaultInput: defaultStyles } = StyleSheet.create({
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

const TextInput = ({ width, style, ...props }: InputProps) => {
  return <BasicInput {...props} style={[defaultStyles, style, { width }]} />;
};

export { TextInput, InputProps };
