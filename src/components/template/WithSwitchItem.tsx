import React from 'react';
import { Flexbox, Image, Typography } from '../atom';
import { ImageProps } from '../atom/Image';
import { StyleSheet } from 'react-native';

type modifiedImageProps = {
  imageWidth?: ImageProps['width'];
  imageHeight?: ImageProps['height'];
  imageResizeMode?: ImageProps['resizeMode'];
};
interface WithSwitchItemProps extends modifiedImageProps {
  src?: string;
  name?: string;
  location?: string;
  itemJustify?: keyof typeof itemJustifyStyle;
  nameFontSize?: keyof typeof nameFontSizeStyle;
}

const itemJustifyStyle = StyleSheet.create({
  default: {
    gap: 20,
    alignItems: 'center',
    justifyContent: undefined,
  },
  center: {
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const nameFontSizeStyle = StyleSheet.create({
  cardList: {
    fontSize: 15,
  },
  switchList: {
    fontSize: 17,
  },
});

const WithSwitchItem = ({
  src = '',
  name = '',
  location = '',
  itemJustify = 'default',
  imageWidth,
  imageHeight,
  imageResizeMode,
  nameFontSize = 'cardList',
}: WithSwitchItemProps) => {
  return (
    <Flexbox {...itemJustifyStyle[itemJustify]}>
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
        <Flexbox flexDirection={'column'} gap={10}>
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

export { WithSwitchItem, WithSwitchItemProps };
