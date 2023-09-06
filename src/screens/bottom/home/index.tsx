/* Types */
import type { BottomTabNavigationOptions, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { RootStackParamList, BottomTabParamList } from '../../../navigators/types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CompositeScreenProps } from '@react-navigation/native';

/* Presentation Things */
import { Button, Text, View } from 'react-native';

/* Styles */
import { styles } from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

function HomeScreen(props: Props) {
  const navigateToModalScreen = () => props.navigation.navigate('Modal', { title: 'Hello' });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Button onPress={navigateToModalScreen} title="Modal" />
    </View>
  );
}

HomeScreen.navigationOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarLabel: 'Home',
  };
};

export default HomeScreen;
