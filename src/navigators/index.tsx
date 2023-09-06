/* Types */
import type { RootStackParamList } from './types';

/* Data Things */
import { THEME } from '../constants';

/* Navigation Things */
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

/* Screen and Stacks */
import BottomTabStack from './bottom-stack';
import ModalScreen from '../screens/modal';

const Stack = createNativeStackNavigator<RootStackParamList>();

const STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = { headerShown: false };

const MODAL_SCREEN_OPTIONS: NativeStackNavigationOptions = { presentation: 'modal' };

export function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
        <Stack.Screen name="BottomTabStack" component={BottomTabStack} options={BottomTabStack.options} />

        <Stack.Group screenOptions={MODAL_SCREEN_OPTIONS}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
