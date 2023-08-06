import COLORS from './colors/base';

const SEMANTIC_COLORS = {
  success: COLORS.green['100'],
  warning: COLORS.yellow['100'],
  error: COLORS.red['100'],
  info: COLORS.blue['100'],
} as const;

const SYSTEM_COLORS = {
  primary: COLORS.blue,
  secondary: COLORS.green,
  neutral: {
    '100': COLORS.white['100'],
    '200': COLORS.gray['100'],
    '300': COLORS.black[100],
  },
} as const;

const COMPONENT_COLORS = {
  text: SYSTEM_COLORS.neutral[100],
} as const;

const PALETTE = {
  color: {
    ...SEMANTIC_COLORS,
    ...SYSTEM_COLORS,
    ...COMPONENT_COLORS,
  },
} as const;

export default PALETTE;
