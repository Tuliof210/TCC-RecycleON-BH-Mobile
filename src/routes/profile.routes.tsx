import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileMainScreen from 'screens/app/profile/profile-main/profile-main.screen';
import ProfileUpdateScreen from 'screens/app/profile/profile-update/profile-update.screen';
import ProfileBookmarksScreen from 'screens/app/profile/profile-bookmarks/profile-bookmarks.screen';

const ProfileStack = createNativeStackNavigator();

export default function ProfileRoutes(props: {
  screenOptions: { headerShown: boolean; contentStyle: { backgroundColor: string } };
}): JSX.Element {
  return (
    <ProfileStack.Navigator screenOptions={props.screenOptions}>
      <ProfileStack.Screen name="profileMain" component={ProfileMainScreen} />
      <ProfileStack.Screen name="profileUpdate" component={ProfileUpdateScreen} />
      <ProfileStack.Screen name="profileBookmarks" component={ProfileBookmarksScreen} />
    </ProfileStack.Navigator>
  );
}
