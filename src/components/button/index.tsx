import React from 'react';

/* Presentation Things */
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';
import { Text } from '../text';

/* Styles */
import { COLOR, FONT, SPACING } from '../../constants';

type Variants = 'filled' | 'outlined';

type Colours = keyof typeof COLOR;

type Props = RectButtonProps & {
  variant?: Variants;
  loading?: boolean;
  color?: Colours;
  title: string;
};

export const Button = ({ title, variant = 'filled', color, loading, ...props }: Props) => {
  /* Variables */
  const style = [
    styles.container,
    variants[variant],
    colors[color as keyof typeof COLOR],
    props.enabled === false && styles.disabled,
    props.style,
  ];
  const textColor = variant === 'filled' ? COLOR.white : COLOR.black;

  return (
    /*
      Should add an extra wrapper View to override the default native behaviour
      https://github.com/software-mansion/react-native-gesture-handler/issues/477
    */
    <View style={style}>
      <RectButton {...props} style={styles.wrapper}>
        {loading && <ActivityIndicator size={FONT.M} color={textColor} style={styles.loader} />}

        {/* We just hiding the text to avoid layout shift */}

        <Text type="bold" size="M" style={{ opacity: loading ? 0 : 1, color: textColor }}>
          {title}
        </Text>
      </RectButton>
    </View>
  );
};

const variants = StyleSheet.create<Record<Variants, ViewStyle>>({
  filled: {
    backgroundColor: COLOR.black,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderColor: COLOR.secondary,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

const colors = StyleSheet.create<Record<Colours, ViewStyle>>(
  Object.keys(COLOR).reduce(
    (acc, curr) => ({ ...acc, [curr]: { backgroundColor: COLOR[curr as keyof typeof COLOR] } }),
    {} as Record<Colours, ViewStyle>,
  ),
);

const styles = StyleSheet.create({
  container: {
    borderRadius: SPACING.S,
    overflow: 'hidden',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.M,
  },
  disabled: {
    opacity: 0.7,
  },
  loader: {
    position: 'absolute',
  },
});
