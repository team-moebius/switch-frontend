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
  src: string;
  text?: string;
  children?: ReactNode;
  fontSize?: keyof typeof fontSizeStyle;
  childDirection?: keyof typeof flexDirectionStyle;
  mirrorDirection?: keyof typeof mirrorDirectionStyle;
  cardDirection?: keyof typeof flexDirectionStyle;
}

export const fontSizeStyle = StyleSheet.create({
  cardList: {
    fontSize: 15,
  },
  switchList: {
    fontSize: 17,
  },
});

export const flexDirectionStyle = StyleSheet.create({
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
  imageWidth = 100,
  imageHeight = 70,
  imageResizeMode = 'center',
  fontSize = 'cardList',
  childDirection = 'row',
  cardDirection = 'row',
}: WithImageProps) => {
  return (
    <Flexbox gap={10} {...flexDirectionStyle[cardDirection]}>
      <Flexbox.Item width={'auto'}>
        <Image
          width={imageWidth}
          height={imageHeight}
          src={src}
          resizeMode={imageResizeMode}
        />
      </Flexbox.Item>
      <Flexbox.Item flex={1}>
        <Flexbox {...flexDirectionStyle[childDirection]} gap={10}>
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
