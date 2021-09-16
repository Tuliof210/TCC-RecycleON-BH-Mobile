import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from '../constants/styles';

import LoginScreen from '../screens/Login.screen';
import SignupScreen from '../screens/Signup.screen';

export default () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.get('white') },
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name="signup" component={SignupScreen} options={{ title: 'Signup' }} />
    </Stack.Navigator>
  );
};
