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
  BottomTabScreenProps<BottomTabParamList, 'Discover'>,
  NativeStackScreenProps<RootStackParamList>
>;

function DiscoverScreen(props: Props) {
  return <Text style={styles.title}>Discover</Text>;
}

DiscoverScreen.navigationOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarLabel: 'Discover',
  };
};

export default DiscoverScreen;
