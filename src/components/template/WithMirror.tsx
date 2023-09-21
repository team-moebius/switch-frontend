import React, { ReactNode } from 'react';
import { Flexbox } from '../atom';
import { StyleSheet } from 'react-native';

interface WithMirrorProps {
  renderItem: [ReactNode, ReactNode];
  mirrorDirection?: keyof typeof mirrorDirectionStyle;
  centerAxis?: ReactNode;
}

export const mirrorDirectionStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
});

export const WidthStyle = StyleSheet.create({
  default: {
    maxWidth: '50%',
  },
});

const WithMirror = ({
  renderItem,
  mirrorDirection = 'row',
  centerAxis,
}: WithMirrorProps) => {
  return (
    <Flexbox {...mirrorDirectionStyle[mirrorDirection]} {...WidthStyle.default}>
      <Flexbox.Item>{renderItem[0]}</Flexbox.Item>
      <Flexbox.Item>{centerAxis}</Flexbox.Item>
      <Flexbox.Item>{renderItem[1]}</Flexbox.Item>
    </Flexbox>
  );
};

export { WithMirror, WithMirrorProps };
