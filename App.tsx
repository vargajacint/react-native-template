import React from 'react';

/* Presentation Things */
import { StyleSheet } from 'react-native';

/* Navigation Things */
import { Navigation } from './src/navigators';

/* Providers */
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SWRProvider } from './src/contexts';

export default function () {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <SWRProvider>
          <Navigation />
        </SWRProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
