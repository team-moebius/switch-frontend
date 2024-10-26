import { useMemo } from 'react';
import { Image, Typography } from '../atom';
import { ImageProps } from '../atom/Image';
import { Card } from './Card';
import { Pressable } from 'react-native';
import { FONT_SIZE } from 'src/assets/theme/base';

interface ImageCardProps extends ImageProps {
  title?: string;
  desc?: string;
  onClickHandler?: () => void;
}

const ImageCard = ({
  title = '',
  desc = '',
  src = '',
  width,
  height,
  resizeMode,
  onClickHandler,
}: ImageCardProps) => {
  const header = useMemo(
    () =>
      desc ? (
        <Typography fontSize={FONT_SIZE.normal}>{desc}</Typography>
      ) : (
        <></>
      ),
    [desc]
  );
  const content = useMemo(
    () => (
      <Image width={width} height={height} src={src} resizeMode={resizeMode} />
    ),
    [width, height, src, resizeMode]
  );
  const footer = useMemo(
    () =>
      title ? (
        <Typography fontSize={FONT_SIZE.normal}>{title}</Typography>
      ) : (
        <></>
      ),
    [title]
  );

  return (
    <Pressable onPress={onClickHandler}>
      <Card
        headerWrapperStyle={{ justify: 'flex-start', pt: 5 }}
        contentWrapperStyle={{ justify: 'center', pt: 5 }}
        footerWrapperStyle={{ justify: 'center', pt: 5 }}
        header={header}
        content={content}
        footer={footer}
      />
    </Pressable>
  );
};

export { ImageCard, ImageCardProps };
