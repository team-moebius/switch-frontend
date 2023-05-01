import { useEffect, useState } from 'react';
import { ALL_COLOR, SIXTEEN } from '../const/enums';

export function useSetRandomColor() {
  const [color, setColor] = useState<string>('#797979'); // Default color is gray

  useEffect(() => {
    const randomHexColor = `#${Math.floor(Math.random() * ALL_COLOR).toString(
      SIXTEEN
    )}`;
    setColor(randomHexColor);
  }, []);

  return color;
}
