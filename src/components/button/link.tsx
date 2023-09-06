import React, { useCallback } from 'react';

/* Data Things */
import { useNavigation } from '@react-navigation/native';

/* Presentation Things */
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, TextProps } from '../text';

type LinkTo = {
  to: string;
  params?: Object;
};

type LinkPress = {
  onPress(): void;
};

type Props = TextProps & (LinkTo | LinkPress);

export const Link = ({ children, ...props }: Props) => {
  /* Hooks */
  const { navigate } = useNavigation();

  const onPress = useCallback(() => {
    if ('to' in props) {
      navigate(props.to, props.params);
    } else {
      props.onPress();
    }
  }, [props, navigate]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Text {...props}>{children}</Text>
    </TouchableOpacity>
  );
};
