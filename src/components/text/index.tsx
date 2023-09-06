import React from 'react';

/* Types */
import type { TextProps as RNTextProps, TextStyle } from 'react-native';

/* Presentation Things */
import { NativeText as RNText } from 'react-native/Libraries/Text/TextNativeComponent'; //https://github.com/facebook/react-native/commit/dd2a9af69b1b50c0fbd2f9a4854f28bc675cdaf8#comments
import { StyleSheet } from 'react-native';

/* Constants */
import { COLOR, FONT } from '../../constants';

type TextAlign = TextStyle['textAlign'];

type TextColors = keyof typeof COLOR;

type TextTypes = 'normal' | 'bold';

type TextSize = keyof typeof FONT;

export type TextProps = RNTextProps & {
  color?: TextColors;
  align?: TextAlign;
  type?: TextTypes;
  size?: TextSize;
};

export const Text = ({ color = 'white', type = 'normal', size = 'M', align = 'left', ...props }: TextProps) => {
  return (
    <RNText {...props} style={[sizes[size], types[type], colors[color], { textAlign: align }, props.style]}>
      {props.children}
    </RNText>
  );
};

const types = StyleSheet.create<Record<TextTypes, TextStyle>>({
  normal: {
    fontFamily: 'Oxygen-Regular',
  },
  bold: {
    fontFamily: 'Oxygen-Bold',
  },
});

const colors = StyleSheet.create<Record<TextColors, TextStyle>>(
  Object.keys(COLOR).reduce(
    (acc, curr) => ({ ...acc, [curr]: { color: COLOR[curr as keyof typeof COLOR] } }),
    {} as Record<TextColors, TextStyle>,
  ),
);

const sizes = StyleSheet.create<Record<TextSize, TextStyle>>(
  Object.keys(FONT).reduce(
    (acc, curr) => ({ ...acc, [curr]: { fontSize: FONT[curr as keyof typeof FONT] } }),
    {} as Record<TextSize, TextStyle>,
  ),
);
