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
import { COLORS } from 'src/assets/theme/base';

interface InputProps {
  name: string;
  onChangeText: (value: string) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => void;
  placeholder?: string;
  value: string | undefined;
  disabled?: boolean;
  style?: ViewStyle & TextStyle;
  keyboardType?: KeyboardTypeOptions;
}

const { defaultInput: defaultStyles } = StyleSheet.create({
  defaultInput: {
    height: 35,
    borderWidth: 1,
    borderRadius: 4,
    flex: 1,
    padding: 8,
    borderColor: COLORS.neutral.white,
    color: COLORS.neutral.black,
  },
});

const TextInput = ({ style, ...props }: InputProps) => {
  return <BasicInput {...props} style={[defaultStyles, style]} />;
};

export { TextInput, InputProps };
