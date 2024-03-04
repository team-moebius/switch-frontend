import { ReactNode, useContext } from 'react';
import { ThemeContext } from 'src/context/theme';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native';
import { Box } from '../atom';

interface KeyboardScreenWrapperProps {
  children?: ReactNode;
}
const KeyboardScreenWrapper = ({ children }: KeyboardScreenWrapperProps) => {
  const { color } = useContext(ThemeContext);
  const dimension = useWindowDimensions();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: color.container_background }}
    >
      <ScrollView>
        <Box
          backgroundColor={color.container_background}
          width={'100%'}
          height={'100%'}
        >
          {children}
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export { KeyboardScreenWrapper };
