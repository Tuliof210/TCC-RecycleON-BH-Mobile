import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from 'common/constants/colors';

import SignUpScreen from 'screens/auth/signup/signup.screen';
import SignInScreen from 'screens/auth/signin/signin.screen';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = (props: { screenOptions: { headerShown: boolean; contentStyle: { backgroundColor: string } } }) => (
  <AuthStack.Navigator screenOptions={props.screenOptions}>
    <AuthStack.Screen name="signIn" component={SignInScreen} />
    <AuthStack.Screen name="signUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
