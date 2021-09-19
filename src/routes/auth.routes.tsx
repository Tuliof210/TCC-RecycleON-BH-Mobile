import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from 'styles/colors';

import SignupScreen from 'screens/signup/signup.screen';
import LoginScreen from 'screens/login/login.screen';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
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
