import React from 'react';

/* Types */
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import type { BottomTabParamList } from '../types';

/* Navigation Things */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Screens - Stacks */
import DiscoverScreen from '../../screens/bottom/discover';
import SettingsScreen from '../../screens/bottom/settings';
import HomeScreen from '../../screens/bottom/home';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const SCREEN_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
};

export default function BottomTabStack() {
  return (
    <Tab.Navigator screenOptions={SCREEN_OPTIONS} initialRouteName="Home">
      <Tab.Screen name="Discover" component={DiscoverScreen} options={DiscoverScreen.navigationOptions} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={HomeScreen.navigationOptions} />
      <Tab.Screen name="Home" component={HomeScreen} options={HomeScreen.navigationOptions} />
    </Tab.Navigator>
  );
}

BottomTabStack.options = (): NativeStackNavigationOptions => {
  return {
    animation: 'slide_from_bottom',
  };
};
