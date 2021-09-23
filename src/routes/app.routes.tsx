import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from 'common/constants/colors';

import HomeScreen from 'screens/app/home/home.screen';

const AuthStack = createNativeStackNavigator();

const AppRoutes = (props: { screenOptions: { headerShown: boolean; contentStyle: { backgroundColor: string } } }) => (
  <AuthStack.Navigator screenOptions={props.screenOptions}>
    <AuthStack.Screen name="Home" component={HomeScreen} />
  </AuthStack.Navigator>
);

export default AppRoutes;
