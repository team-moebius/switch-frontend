import React from 'react';
import { Button as BasicButton } from 'react-native';
export interface ButtonProps {
  onPress: () => void;
  title: string;
}

const Button = ({ title = 'Button', ...props }: ButtonProps) => {
  return <BasicButton {...props} title={title} />;
};

export default Button;
