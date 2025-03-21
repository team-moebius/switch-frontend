import { Pressable, StyleSheet } from 'react-native';
import { WithImage } from '../template';
import { flexDirectionStyle, fontSizeStyle } from '../template/WithImage';
import { Flexbox, Typography } from '../atom';
import { ImageProps } from '../atom/Image';
import { FONT_SIZE } from 'src/assets/theme/base';

interface TradingListItemProps {
  data: {
    src: string;
    name: string;
    preferredLocation: string;
  };
  onPress?: () => void;
  childDirection?: keyof typeof flexDirectionStyle;
  cardDirection?: keyof typeof flexDirectionStyle;
  itemJustify?: keyof typeof itemJustifyStyle;
  fontSize?: keyof typeof fontSizeStyle;
  imageResizeMode?: ImageProps['resizeMode'];
}

export const itemJustifyStyle = StyleSheet.create({
  left: {
    justifyContent: undefined,
  },
  center: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
});

const TradingListItem = ({
  data,
  onPress,
  childDirection,
  cardDirection,
  itemJustify = 'left',
  fontSize,
  imageResizeMode,
}: TradingListItemProps) => {
  const { src, name, preferredLocation } = data;

  return (
    <Pressable onPress={onPress}>
      <Flexbox {...itemJustifyStyle[itemJustify]}>
        <Flexbox.Item width={'100%'}>
          <WithImage
            text={name}
            src={src}
            fontSize={fontSize}
            imageWidth={100}
            imageHeight={70}
            imageResizeMode={imageResizeMode}
            renderItem={
              preferredLocation ? (
                <Typography fontSize={FONT_SIZE.smaller}>
                  {preferredLocation}
                </Typography>
              ) : (
                <></>
              )
            }
            childDirection={childDirection}
            cardDirection={cardDirection}
          />
        </Flexbox.Item>
      </Flexbox>
    </Pressable>
  );
};

export { TradingListItem, TradingListItemProps };
