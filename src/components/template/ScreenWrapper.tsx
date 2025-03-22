import { ReactNode, useContext } from 'react';
import { ThemeContext } from 'src/context/theme';
import { Box } from '../atom';

interface ScreenWrapperProps {
  children?: ReactNode;
}
const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  const { color } = useContext(ThemeContext);
  return (
    <Box backgroundColor={color.container_background} height={'100%'}>
      {children}
    </Box>
  );
};
export { ScreenWrapper };
