import React from 'react';
import { Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from 'screens/app/home/home.screen';
import WikiScreen from 'screens/app/wiki/wiki.screen';
import ProfileScreen from 'screens/app/profile/profile.screen';

const AppTab = createBottomTabNavigator();

export default function AppRoutes(props: {
  screenOptions: { headerShown: boolean; contentStyle: { backgroundColor: string } };
}): JSX.Element {
  const Tabs = new Map<string, string>([
    ['Home', 'Home'],
    ['Wiki', 'Wiki'],
    ['Profile', 'Profile'],
  ]);

  const tabOptions = {
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarShowLabel: false,
    ...props.screenOptions,
  };

  return (
    <AppTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const iconName = Tabs.get(route.name) ?? 'unknown';
          return <Text style={{ color: focused ? '#F70' : '#444' }}>{iconName}</Text>;
        },
        ...tabOptions,
      })}
    >
      <AppTab.Screen name="Home" component={HomeScreen} />
      <AppTab.Screen name="Wiki" component={WikiScreen} />
      <AppTab.Screen name="Profile" component={ProfileScreen} />
    </AppTab.Navigator>
  );
}
