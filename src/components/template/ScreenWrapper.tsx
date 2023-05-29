import React, { ReactNode } from 'react';
import { Box } from '../atom';

interface ScreenWrapperProps {
  children?: ReactNode;
}
const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return (
    <Box width={'100%'} height={'100%'}>
      {children}
    </Box>
  );
};
export { ScreenWrapper };
