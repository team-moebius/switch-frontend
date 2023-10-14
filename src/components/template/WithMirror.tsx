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
  row: {
    maxWidth: '50%',
  },
  column: {
    maxWidth: '100%',
  },
});

const WithMirror = ({
  renderItem,
  mirrorDirection = 'row',
  centerAxis,
}: WithMirrorProps) => {
  return (
    <Flexbox
      {...mirrorDirectionStyle[mirrorDirection]}
      {...WidthStyle[mirrorDirection]}
    >
      <Flexbox.Item>{renderItem[0]}</Flexbox.Item>
      <Flexbox.Item>{centerAxis}</Flexbox.Item>
      <Flexbox.Item>{renderItem[1]}</Flexbox.Item>
    </Flexbox>
  );
};

export { WithMirror, WithMirrorProps };
