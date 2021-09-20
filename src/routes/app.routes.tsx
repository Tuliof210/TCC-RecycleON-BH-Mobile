import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from 'common/constants/colors';

import HomeScreen from 'screens/app/home/home.screen';

const AuthStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: colors.get('white') },
    }}
  >
    <AuthStack.Screen name="Home" component={HomeScreen} />
  </AuthStack.Navigator>
);

export default AppRoutes;
