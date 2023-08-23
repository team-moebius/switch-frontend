import React from 'react';
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

const ImageCard = ({
  title = '',
  desc = '',
  src = '',
  width,
  height,
  margin,
  resizeMode,
  onClickHandler,
}: ImageCardProps) => {
  const header = <Typography fontSize={15}>{desc}</Typography>;
  const content = (
    <Image width={width} height={height} src={src} resizeMode={resizeMode} />
  );
  const footer = <Typography fontSize={15}>{title}</Typography>;

  return (
    <Pressable onPress={onClickHandler}>
      <Card
        width={width}
        margin={margin}
        headerAlign={'flex-start'}
        contentAlign={'center'}
        footerAlign={'center'}
        header={header}
        content={content}
        footer={footer}
      />
    </Pressable>
  );
};

export { ImageCard, ImageCardProps };
