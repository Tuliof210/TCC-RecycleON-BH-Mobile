import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { colors } from './src/constants/styles';

import LoginScreen from './src/screens/Login.screen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.get('green-dark'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
