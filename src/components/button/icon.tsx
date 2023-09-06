import React from 'react';

/* Types */
import type { BorderlessButtonProps } from 'react-native-gesture-handler';
import type { ViewStyle } from 'react-native';

/* Presentation Things */
import { BorderlessButton } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';

/* Styles */
import { COLOR, ICON } from '../../constants';

type Colours = keyof typeof COLOR;

type Variants = 'filled' | 'normal';

type Sizes = keyof typeof ICON;

type Props = BorderlessButtonProps & {
  icon: JSX.Element;
  variant?: Variants;
  color?: Colours;
  size?: Sizes;
};

export const IconButton = ({ color, variant = 'normal', size = 'L', ...props }: Props) => {
  /* Variables */
  const style = [variants[variant], colors[color as Colours], sizes[size], props.style];

  return (
    /*
        Should add an extra wrapper View to override the default native behaviour
        https://github.com/software-mansion/react-native-gesture-handler/issues/477
    */
    <BorderlessButton foreground activeOpacity={0.7} {...props}>
      <View style={style}>{props.icon}</View>
    </BorderlessButton>
  );
};

const variants = StyleSheet.create<Record<Variants, ViewStyle>>({
  filled: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.black,
  },
  normal: {},
});

const colors = StyleSheet.create<Record<Colours, ViewStyle>>(
  Object.keys(COLOR).reduce(
    (acc, curr) => ({ ...acc, [curr]: { backgroundColor: COLOR[curr as keyof typeof COLOR] } }),
    {} as Record<Colours, ViewStyle>,
  ),
);

const sizes = StyleSheet.create<Record<Sizes, ViewStyle>>(
  Object.keys(ICON).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: {
        borderRadius: ICON[curr as keyof typeof ICON],
        height: ICON[curr as keyof typeof ICON],
        width: ICON[curr as keyof typeof ICON],
      },
    }),
    {} as Record<Sizes, ViewStyle>,
  ),
);

IconButton.defaultProps = {
  hitSlop: { left: 50, right: 50, top: 50, bottom: 50 },
};
