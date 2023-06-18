import { Text, LayoutChangeEvent, TextStyle } from 'react-native';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
// import * as Notosans from 'src/assets/fonts/Noto_Sans';

// TODO : fontSize, fontColor 구체화 하기

interface TypographyProps
  extends Pick<TextStyle, 'fontFamily' | 'color' | 'fontWeight'> {
  children: string | number;
  fontSize: TextStyle['fontSize'] | 'inherit';
  onLayout?: (event: LayoutChangeEvent) => void;
  fontFamily?: keyof typeof fontMap;
}

const fontMap = {
  'noto-sans-reg': require('src/assets/fonts/Noto_Sans/NotoSans-Regular.ttf'),
  'dancing-script-reg': require('src/assets/fonts/Dancing_Script/DancingScript-Regular.ttf'),
};

const Typography = ({
  color,
  fontSize,
  fontFamily,
  fontWeight,
  children,
  ...props
}: TypographyProps) => {
  const [loaded] = useFonts(fontMap);
  useEffect(() => {
    if (loaded) {
      console.info('Fonts successfully loaded');
    }
  }, [loaded]);
  return (
    <Text
      {...props}
      style={
        {
          color,
          fontFamily,
          fontSize,
          fontWeight,
        } as TextStyle
      }
    >
      {children}
    </Text>
  );
};

export { Typography };
