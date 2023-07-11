import React, { ReactNode } from 'react';
import { Flexbox, Icon } from '../atom';
import { StyleSheet } from 'react-native';
import { IconProps } from '../atom/Icon';

type ModifiedIconProps = Omit<IconProps, 'size' | 'name'> & {
  iconSize?: IconProps['size'];
  iconName?: IconProps['name'];
};
interface SwitchListProps extends ModifiedIconProps {
  childrenA?: ReactNode;
  childrenB?: ReactNode;
  listDirection?: keyof typeof listDirectionStyle;
}

export const listDirectionStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const SwitchList = ({
  childrenA,
  childrenB,
  listDirection = 'row',
  iconName = 'code-outline',
  iconSize = 20,
}: SwitchListProps) => {
  return (
    <Flexbox {...listDirectionStyle[listDirection]} gap={10}>
      <Flexbox.Item>{childrenA}</Flexbox.Item>
      <Flexbox.Item>
        <Icon name={iconName} size={iconSize} />
      </Flexbox.Item>
      <Flexbox.Item>{childrenB}</Flexbox.Item>
    </Flexbox>
  );
};

export { SwitchList, SwitchListProps };
