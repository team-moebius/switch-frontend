import React, { useMemo } from 'react';
import { Image, Typography } from '../atom';
import { ImageProps } from '../atom/Image';
import { Card } from './Card';
import { Margin } from 'src/@types/unit';
import { Pressable } from 'react-native';

interface ImageCardProps extends ImageProps {
  name?: string;
  preferredLocation?: string;
  margin?: Margin;
  images?: string[];
  onClickHandler?: () => void;
}

const ImageCard = React.memo(
  ({
    name = '',
    preferredLocation = '',
    images = [''],
    width,
    height,
    margin,
    resizeMode,
    onClickHandler,
  }: ImageCardProps) => {
    const header = useMemo(
      () => <Typography fontSize={15}>{preferredLocation}</Typography>,
      [preferredLocation]
    );
    const content = useMemo(
      () => (
        <Image
          width={width}
          height={height}
          src={images[0]}
          resizeMode={resizeMode}
        />
      ),
      [width, height, images, resizeMode]
    );
    const footer = useMemo(
      () => <Typography fontSize={15}>{name}</Typography>,
      [name]
    );

    return (
      <Pressable onPress={onClickHandler}>
        <Card
          width={width}
          margin={margin}
          headerWrapperStyle={{ align: 'flex-start' }}
          contentWrapperStyle={{ align: 'center', pt: 5 }}
          footerWrapperStyle={{ align: 'center', pt: 5 }}
          header={header}
          content={content}
          footer={footer}
        />
      </Pressable>
    );
  }
);

export { ImageCard, ImageCardProps };
