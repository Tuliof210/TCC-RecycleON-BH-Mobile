import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from 'screens/app/profile/profile.screen';

const ProfileStack = createNativeStackNavigator();

export default function ProfileRoutes(props: {
  screenOptions: { headerShown: boolean; contentStyle: { backgroundColor: string } };
}): JSX.Element {
  return (
    <ProfileStack.Navigator screenOptions={props.screenOptions}>
      <ProfileStack.Screen name="profileMain" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}
