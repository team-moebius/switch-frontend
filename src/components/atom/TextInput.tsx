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
import COLORS from 'src/assets/theme/base';

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
    borderColor: COLORS.neutral.white,
    color: COLORS.neutral.black,
  },
});

const TextInput = ({ width, style, ...props }: InputProps) => {
  return <BasicInput {...props} style={[defaultStyles, style, { width }]} />;
};

export { TextInput, InputProps };
