import { FontSource, useFonts } from 'expo-font';
import { useMemo } from 'react';

const useAssets = ({
  fonts,
}: {
  fonts: string | Record<string, FontSource>;
}) => {
  const [fontLoaded] = useFonts(fonts);

  return useMemo(() => {
    return [fontLoaded];
  }, [fontLoaded]);
};

export default useAssets;
