import React from 'react';
import { Button as BasicButton } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const Button = ({ title = 'Button', ...props }: ButtonProps) => {
  return <BasicButton {...props} title={title} />;
};

export { Button, ButtonProps };
