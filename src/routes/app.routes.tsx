import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from 'screens/app/home/home.screen';

const AuthStack = createNativeStackNavigator();

export default function AppRoutes(props: {
  screenOptions: { headerShown: boolean; contentStyle: { backgroundColor: string } };
}): JSX.Element {
  return (
    <AuthStack.Navigator screenOptions={props.screenOptions}>
      <AuthStack.Screen name="Home" component={HomeScreen} />
    </AuthStack.Navigator>
  );
}
