/* Types */
import type { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  BottomTabStack: NavigatorScreenParams<BottomTabParamList>;
  Modal: { title: string };
};

export type BottomTabParamList = {
  Home: undefined;
  Discover: undefined;
  Settings: undefined;
};
