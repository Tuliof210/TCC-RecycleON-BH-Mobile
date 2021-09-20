import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from 'common/constants/colors';

import SignupScreen from 'screens/auth/signup/signup.screen';
import LoginScreen from 'screens/auth/login/login.screen';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: colors.get('white') },
    }}
  >
    <AuthStack.Screen name="login" component={LoginScreen} />
    <AuthStack.Screen name="signup" component={SignupScreen} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
