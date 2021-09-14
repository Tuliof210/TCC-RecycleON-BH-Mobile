import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { useFonts } from '@use-expo/font';

import LoginScreen from './src/screens/Login.screen';

export default function App() {
  if (__DEV__) {
    require('react-devtools');
  }

  const [isLoaded] = useFonts({
    'Ubuntu-Bold': require('./src/assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-BoldItalic': require('./src/assets/fonts/Ubuntu-BoldItalic.ttf'),
    'Ubuntu-Italic': require('./src/assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Light': require('./src/assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu-LightItalic': require('./src/assets/fonts/Ubuntu-LightItalic.ttf'),
    'Ubuntu-Medium': require('./src/assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-MediumItalic': require('./src/assets/fonts/Ubuntu-MediumItalic.ttf'),
    'Ubuntu-Regular': require('./src/assets/fonts/Ubuntu-Regular.ttf'),
  });

  return isLoaded ? (
    <Fragment>
      <StatusBar style="auto" />
      <LoginScreen />
    </Fragment>
  ) : (
    <AppLoading></AppLoading>
  );
}
