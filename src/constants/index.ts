/* Types */
import type { Theme } from '@react-navigation/native';

/* Data Things */
import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('screen');

const wp = (widthPercent: number) => {
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

export const ICON = {
  S: wp(4),
  M: wp(6),
  L: wp(8),
  XL: wp(10),
  XXL: wp(12),
} as const;

export const COLOR = {
  primary: '#EDC56A',
  secondary: '#747A87',
  tertiary: '#14161B',
  white: '#FFFFFF',
  black: '#000000',
  red: '#F46363',
  gold: '#CF9A22',
  green: '#15B077',
} as const;

export const SPACING = {
  XXS: wp(1),
  XS: wp(1.5),
  S: wp(2),
  M: wp(3.5),
  L: wp(5),
  XL: wp(8),
} as const;

export const FONT = {
  XS: wp(2.5),
  S: wp(3.5),
  M: wp(4),
  L: wp(5),
  XL: wp(7),
  XXL: wp(9),
} as const;

export const THEME: Theme = {
  colors: {
    background: COLOR.tertiary,
    border: COLOR.tertiary,
    card: COLOR.tertiary,
    notification: COLOR.red,
    primary: COLOR.primary,
    text: COLOR.white,
  },
  dark: true,
};

export { formatCurrency } from './functions';
