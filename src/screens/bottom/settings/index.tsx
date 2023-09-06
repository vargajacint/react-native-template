/* Types */
import type { BottomTabNavigationOptions, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { RootStackParamList, BottomTabParamList } from '../../../navigators/types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CompositeScreenProps } from '@react-navigation/native';

/* Presentation Things */
import { Text } from '../../../components';

/* Styles */
import { styles } from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Settings'>,
  NativeStackScreenProps<RootStackParamList>
>;

function SettingsScreen(props: Props) {
  return <Text style={styles.title}>Settings</Text>;
}

SettingsScreen.navigationOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarLabel: 'Settings',
  };
};

export default SettingsScreen;
