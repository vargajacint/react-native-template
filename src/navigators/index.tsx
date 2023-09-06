import { useEffect, useRef, useState } from 'react';

/* Types */
import type { RootStackParamList } from './types';

/* Data Things */
import SplashScreen from 'react-native-bootsplash';
import { THEME } from '../constants';

/* Navigation Things */
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';

/* Screen and Stacks */
import BottomTabStack from './bottom-stack';
import ModalScreen from '../screens/modal';

const Stack = createNativeStackNavigator<RootStackParamList>();

const STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = { headerShown: false };

const MODAL_SCREEN_OPTIONS: NativeStackNavigationOptions = { presentation: 'modal' };

export function Navigation() {
  /* States */
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  /* Refs */
  const _navigator = useRef<NavigationContainerRef<RootStackParamList>>(null);

  const onNavigationReady = () => setIsNavigationReady(true);

  useEffect(() => {
    // Here you can use your own logic. For example, hide the splash screen after u get the user data from the server
    if (isNavigationReady) {
      SplashScreen.hide({ fade: true });
    }
  }, [isNavigationReady]);

  return (
    <NavigationContainer ref={_navigator} theme={THEME} onReady={onNavigationReady}>
      <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
        <Stack.Screen name="BottomTabStack" component={BottomTabStack} options={BottomTabStack.options} />

        <Stack.Group screenOptions={MODAL_SCREEN_OPTIONS}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
