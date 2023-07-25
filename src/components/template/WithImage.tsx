import React from 'react';
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
  content?: string;
  location?: string;
  itemJustify?: keyof typeof itemJustifyStyle;
  fontSize?: keyof typeof fontSizeStyle;
  descDirection?: keyof typeof descDirectionStyle;
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

export const descDirectionStyle = StyleSheet.create({
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
  content = '',
  location = '',
  itemJustify = 'left',
  imageWidth = 100,
  imageHeight = 70,
  imageResizeMode = 'center',
  fontSize = 'cardList',
  descDirection = 'row',
  mirrorDirection,
}: WithImageProps) => {
  return (
    <Flexbox {...itemJustifyStyle[itemJustify]} gap={20}>
      {src && (
        <Flexbox.Item>
          <Image
            width={imageWidth}
            height={imageHeight}
            src={src}
            resizeMode={imageResizeMode}
          />
        </Flexbox.Item>
      )}
      <Flexbox.Item flex={mirrorDirection === 'row' ? 1 : undefined}>
        <Flexbox {...descDirectionStyle[descDirection]} gap={10}>
          <Flexbox.Item flex={mirrorDirection === 'row' ? 1 : undefined}>
            <Typography {...fontSizeStyle[fontSize]} numberOfLines={5}>
              {content}
            </Typography>
          </Flexbox.Item>
          {location && (
            <Flexbox.Item>
              <Typography fontSize={13}>{location}</Typography>
            </Flexbox.Item>
          )}
        </Flexbox>
      </Flexbox.Item>
    </Flexbox>
  );
};

export { WithImage, WithImageProps };
