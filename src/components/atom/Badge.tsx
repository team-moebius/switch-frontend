import React, { ReactNode } from 'react';
import Flexbox from './Flexbox';
import { Color, LengthElement } from 'src/@types/unit';

interface BadgeProps {
  backgroundColor: Color;
  height: LengthElement;
  padding: LengthElement;
  children: ReactNode;
}

const Badge = ({
  height = 45,
  padding = 10,
  backgroundColor = '#00c2ae',
  children,
}: BadgeProps) => {
  return (
    <Flexbox
      height={height}
      padding={padding}
      backgroundColor={backgroundColor}
      borderRadius={6}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {children}
    </Flexbox>
  );
};

export default Badge;
