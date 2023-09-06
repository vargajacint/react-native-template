import React from 'react';

/* Navigation Things */
import { Navigation } from './src/navigators';

/* Providers */
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function () {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
