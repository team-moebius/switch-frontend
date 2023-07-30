import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

type IconProps = {
  name: keyof typeof Ionicons.glyphMap;
  size?: 20 | 24 | 32;
  color?: string;
};
/** Icon Preview
 *  https://icons.expo.fyi/
 *
 *
 */

const Icon = ({ color, size, name }: IconProps) => {
  return <Ionicons color={color} size={size} name={name} />;
};

export { Icon, IconProps };
