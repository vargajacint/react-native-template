import React from 'react';

/* Presentation Things */
import { StyleSheet } from 'react-native';

/* Navigation Things */
import { Navigation } from './src/navigators';

/* Providers */
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function () {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
