import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './src/screens/Login.screen';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <LoginScreen />
    </Fragment>
  );
}
