import { Pressable } from 'react-native';
import { Icon, IconProps } from './Icon';

interface IconButtonProps extends IconProps {
  onPress: () => void;
}
const IconButton = ({ onPress, ...props }: IconButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Icon {...props} />
    </Pressable>
  );
};

export { IconButton };
