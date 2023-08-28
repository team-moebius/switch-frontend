import React, { useMemo } from 'react';
import { Image, Typography } from '../atom';
import { ImageProps } from '../atom/Image';
import { Card } from './Card';
import { Margin } from 'src/@types/unit';
import { Pressable } from 'react-native';

interface ImageCardProps extends ImageProps {
  title?: string;
  desc?: string;
  margin?: Margin;
  onClickHandler?: () => void;
}

const ImageCard = React.memo(
  ({
    title = '',
    desc = '',
    src = '',
    width,
    height,
    margin,
    resizeMode,
    onClickHandler,
  }: ImageCardProps) => {
    const header = useMemo(
      () => <Typography fontSize={15}>{desc}</Typography>,
      [desc]
    );
    const content = useMemo(
      () => (
        <Image
          width={width}
          height={height}
          src={src}
          resizeMode={resizeMode}
        />
      ),
      [width, height, src, resizeMode]
    );
    const footer = useMemo(
      () => <Typography fontSize={15}>{title}</Typography>,
      [title]
    );

    return (
      <Pressable onPress={onClickHandler}>
        <Card
          width={width}
          margin={margin}
          headerWrapperStyle={{ align: 'flex-start' }}
          contentWrapperStyle={{ align: 'center' }}
          footerWrapperStyle={{ align: 'center' }}
          header={header}
          content={content}
          footer={footer}
        />
      </Pressable>
    );
  }
);

export { ImageCard, ImageCardProps };
