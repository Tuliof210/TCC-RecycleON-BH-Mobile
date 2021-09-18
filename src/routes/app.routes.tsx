import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from 'screens/home/home.screen';

const AuthStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Home" component={HomeScreen} />
  </AuthStack.Navigator>
);

export default AppRoutes;
