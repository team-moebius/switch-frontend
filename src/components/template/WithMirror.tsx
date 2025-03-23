import { ReactNode } from 'react';
import { Flexbox } from '../atom';
import { StyleSheet } from 'react-native';
import { FlexAlign } from 'src/@types/unit';

interface WithMirrorProps {
  renderItem: [ReactNode, ReactNode];
  mirrorDirection?: keyof typeof mirrorDirectionStyle;
  centerAxis?: ReactNode;
  itemAlignment?: { alignSelf?: FlexAlign };
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
    maxWidth: '100%',
  },
});

const WithMirror = ({
  renderItem,
  mirrorDirection = 'row',
  centerAxis,
  itemAlignment,
}: WithMirrorProps) => {
  return (
    <Flexbox
      {...mirrorDirectionStyle[mirrorDirection]}
      {...WidthStyle.default}
      width={'100%'}
    >
      <Flexbox.Item flex={1} alignSelf={itemAlignment?.alignSelf}>
        <Flexbox justifyContent='center'>{renderItem[0]}</Flexbox>
      </Flexbox.Item>
      <Flexbox.Item>{centerAxis}</Flexbox.Item>
      <Flexbox.Item flex={1} alignSelf={itemAlignment?.alignSelf}>
        <Flexbox justifyContent='center'>{renderItem[1]}</Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { WithMirror, WithMirrorProps };
