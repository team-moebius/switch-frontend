const FONT_MAP = {
  'noto-sans-reg': require('src/assets/fonts/Noto_Sans/NotoSans-Regular.ttf'),
  'dancing-script-reg': require('src/assets/fonts/Dancing_Script/DancingScript-Regular.ttf'),
} as const;

type Font = keyof typeof FONT_MAP;

export { Font };
export default FONT_MAP;
