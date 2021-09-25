import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from 'screens/app/home/home.screen';
import WikiScreen from 'screens/app/wiki/wiki.screen';
import ProfileScreen from 'screens/app/profile/profile.screen';

import { SvgXml } from 'react-native-svg';
import { HomeSVG, WikiSVG, ProfileSVG } from 'assets/svg';

type Icon = {
  defaultIcon: string;
  focusedIcon: string;
};

const AppTab = createBottomTabNavigator();

export default function AppRoutes(props: {
  screenOptions: { headerShown: boolean; contentStyle: { backgroundColor: string } };
}): JSX.Element {
  const Tabs = new Map<string, Icon>([
    ['Home', HomeSVG],
    ['Wiki', WikiSVG],
    ['Profile', ProfileSVG],
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
          const icon = Tabs.get(route.name) ?? { defaultIcon: '', focusedIcon: '' };
          const xml = focused ? icon.focusedIcon : icon.defaultIcon;
          return <SvgXml xml={xml} width={30} height={30} />;
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
