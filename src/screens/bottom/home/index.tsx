/* Types */
import type { BottomTabNavigationOptions, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { RootStackParamList, BottomTabParamList } from '../../../navigators/types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CompositeScreenProps } from '@react-navigation/native';

/* Presentation Things */
import { Text, Button, Link, IconButton } from '../../../components';
import { Alert, View } from 'react-native';

/* Styles */
import { styles } from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

const MyFancyIcon = () => {
  return (
    <View
      style={{
        width: 30,
        height: 30,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      }}>
      <View style={{ width: 15, height: 15, backgroundColor: 'green', borderRadius: 15 }}></View>
    </View>
  );
};

function HomeScreen(props: Props) {
  const navigateToModalScreen = () => props.navigation.navigate('Modal', { title: 'Hello' });
  return (
    <View style={styles.container}>
      <Text size="XL" color="red" type="bold" align="center">
        Home
      </Text>

      <Button onPress={navigateToModalScreen} title="Modal" color="red" />

      <Link to="Discover" color="green" align="center">
        Go to Discover
      </Link>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <IconButton icon={<MyFancyIcon />} onPress={() => Alert.alert('Yeeey', 'Sucessfully pressed the raw icon')} />

        <IconButton
          variant="filled"
          size="XXL"
          icon={<MyFancyIcon />}
          onPress={() => Alert.alert('Yeeey', 'Sucessfully pressed the filled icon')}
        />
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarLabel: 'Home',
  };
};

export default HomeScreen;
