import React from 'react';
import { Flexbox, Image, Typography } from '../atom';
import { ImageProps } from '../atom/Image';
import { StyleSheet } from 'react-native';

type modifiedImageProps = {
  imageWidth?: ImageProps['width'];
  imageHeight?: ImageProps['height'];
  imageResizeMode?: ImageProps['resizeMode'];
};
interface WithImageProps extends modifiedImageProps {
  src?: string;
  name?: string;
  location?: string;
  itemJustify?: keyof typeof itemJustifyStyle;
  nameFontSize?: keyof typeof nameFontSizeStyle;
  descDirection?: keyof typeof descDirectionStyle;
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

export const nameFontSizeStyle = StyleSheet.create({
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
  name = '',
  location = '',
  itemJustify = 'left',
  imageWidth = 100,
  imageHeight = 70,
  imageResizeMode = 'center',
  nameFontSize = 'cardList',
  descDirection = 'row',
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
      <Flexbox.Item>
        <Flexbox {...descDirectionStyle[descDirection]} gap={10}>
          <Flexbox.Item>
            <Typography {...nameFontSizeStyle[nameFontSize]}>{name}</Typography>
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
