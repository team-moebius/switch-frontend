import { Pressable } from 'react-native';
import { Icon } from '../atom';
import { IconProps } from '../atom/Icon';

interface PressableIconProps extends IconProps {
  onPress: () => void;
}

const PressableIcon = ({ color, size, name, onPress }: PressableIconProps) => {
  return (
    <Pressable onPress={onPress}>
      <Icon color={color} size={size} name={name} />
    </Pressable>
  );
};

export { PressableIcon };
