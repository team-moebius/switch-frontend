import { useState } from 'react';
import { LayoutChangeEvent } from 'react-native/types';

export function useSetWidth(padding?: number) {
  const [width, setWidth] = useState<number>(0);

  const onTextLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    if (padding) {
      setWidth(width + padding);
    } else {
      setWidth(width);
    }
  };

  return { width, onTextLayout };
}
