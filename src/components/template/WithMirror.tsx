import React, { ReactNode } from 'react';
import { Flexbox, Icon } from '../atom';
import { StyleSheet } from 'react-native';
import { IconProps } from '../atom/Icon';

interface WithMirrorProps {
  children: [ReactNode, ReactNode];
  mirrorDirection?: keyof typeof mirrorDirectionStyle;
  centerAxis?: ReactNode;
}

export const mirrorDirectionStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const WithMirror = ({
  children,
  mirrorDirection = 'row',
  centerAxis,
}: WithMirrorProps) => {
  return (
    <Flexbox {...mirrorDirectionStyle[mirrorDirection]} gap={10}>
      <Flexbox.Item>{children[0]}</Flexbox.Item>
      <Flexbox.Item>{centerAxis}</Flexbox.Item>
      <Flexbox.Item>{children[1]}</Flexbox.Item>
    </Flexbox>
  );
};

export { WithMirror, WithMirrorProps };
