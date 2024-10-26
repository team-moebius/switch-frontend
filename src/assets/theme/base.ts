import PALETTE from './colors/palettes';

const SEMANTIC_COLORS = {
  success: PALETTE.green['200'],
  warning: PALETTE.yellow['100'],
  error: PALETTE.red['200'],
  info: PALETTE.blue['200'],
} as const;

const SYSTEM_COLORS = {
  primary: PALETTE.blue,
  secondary: PALETTE.green,
  neutral: {
    white: PALETTE.white['100'],
    gray: PALETTE.gray['100'],
    black: PALETTE.black['100'],
  },
} as const;

const COMPONENT_COLORS = {
  text: SYSTEM_COLORS.neutral.black,
  container_background: SYSTEM_COLORS.neutral.white,
} as const;

const COLORS = {
  ...SEMANTIC_COLORS,
  ...SYSTEM_COLORS,
  ...COMPONENT_COLORS,
} as const;

const FONT_SIZE = {
  header: 20,
  bigger: 17,
  normal: 15,
  smaller: 13,
};
const PADDING = {
  vertical: 16,
};

export { COLORS, FONT_SIZE, PADDING };
