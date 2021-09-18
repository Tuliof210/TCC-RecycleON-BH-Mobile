import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupScreen from 'screens/signup/signup.screen';
import LoginScreen from 'screens/login/login.screen';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignupScreen} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
