import React, { ReactNode } from 'react';
import { Flexbox, Image, Typography } from '../atom';
import { ImageProps } from '../atom/Image';
import { StyleSheet } from 'react-native';
import { mirrorDirectionStyle } from './WithMirror';

type modifiedImageProps = {
  imageWidth?: ImageProps['width'];
  imageHeight?: ImageProps['height'];
  imageResizeMode?: ImageProps['resizeMode'];
};
interface WithImageProps extends modifiedImageProps {
  src?: string;
  text?: string;
  children?: ReactNode;
  itemJustify?: keyof typeof itemJustifyStyle;
  fontSize?: keyof typeof fontSizeStyle;
  childDirection?: keyof typeof childDirectionStyle;
  mirrorDirection?: keyof typeof mirrorDirectionStyle;
}

export const itemJustifyStyle = StyleSheet.create({
  left: {
    alignItems: 'center',
    justifyContent: undefined,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export const fontSizeStyle = StyleSheet.create({
  cardList: {
    fontSize: 15,
  },
  switchList: {
    fontSize: 17,
  },
});

export const childDirectionStyle = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const WithImage = ({
  src = '',
  text = '',
  children,
  itemJustify = 'left',
  imageWidth = 100,
  imageHeight = 70,
  imageResizeMode = 'center',
  fontSize = 'cardList',
  childDirection = 'row',
}: WithImageProps) => {
  return (
    <Flexbox {...itemJustifyStyle[itemJustify]} gap={20}>
      <Flexbox.Item>
        <Image
          width={imageWidth}
          height={imageHeight}
          src={src}
          resizeMode={imageResizeMode}
        />
      </Flexbox.Item>
      <Flexbox.Item flex={1}>
        <Flexbox {...childDirectionStyle[childDirection]} gap={10}>
          <Flexbox.Item flex={1}>
            <Typography {...fontSizeStyle[fontSize]} numberOfLines={6}>
              {text}
            </Typography>
          </Flexbox.Item>
          {children}
        </Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { WithImage, WithImageProps };
