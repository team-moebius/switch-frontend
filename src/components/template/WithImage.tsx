import React, { ReactNode } from 'react';
import { Flexbox, Image, Typography } from '../atom';
import { ImageProps } from '../atom/Image';
import { StyleSheet } from 'react-native';

type modifiedImageProps = {
  imageWidth?: ImageProps['width'];
  imageHeight?: ImageProps['height'];
  imageResizeMode?: ImageProps['resizeMode'];
};
interface WithImageProps extends modifiedImageProps {
  src: string;
  text?: string;
  renderItem?: ReactNode;
  fontSize?: keyof typeof fontSizeStyle;
  childDirection?: keyof typeof flexDirectionStyle;
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
  renderItem,
  imageWidth = 100,
  imageHeight = 70,
  imageResizeMode = 'center',
  fontSize = 'cardList',
  childDirection = 'row',
  cardDirection = 'row',
}: WithImageProps) => {
  return (
    <Flexbox {...flexDirectionStyle[cardDirection]} gap={10} width={'100%'}>
      <Flexbox.Item>
        <Image
          width={imageWidth}
          height={imageHeight}
          src={src}
          resizeMode={imageResizeMode}
        />
      </Flexbox.Item>
      <Flexbox.Item alignSelf='center'>
        <Flexbox {...flexDirectionStyle[childDirection]} gap={10}>
          <Flexbox.Item>
            <Typography {...fontSizeStyle[fontSize]} numberOfLines={6}>
              {text}
            </Typography>
          </Flexbox.Item>
          {renderItem}
        </Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { WithImage, WithImageProps };
