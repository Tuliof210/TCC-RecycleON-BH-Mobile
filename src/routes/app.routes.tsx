import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LocationProvider } from 'context';

import HomeScreen from 'screens/app/home/home.screen';

import WikiRoutes from './wiki.routes';
import ProfileRoutes from './profile.routes';

import { SvgXml } from 'react-native-svg';
import { HomeSVG, WikiSVG, ProfileSVG } from 'assets/svgs';

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
    tabBarShowLabel: false,
    ...props.screenOptions,
  };

  const HomeScreenWithContext = () => (
    <LocationProvider>
      <HomeScreen />
    </LocationProvider>
  );

  const WikiRoutesConfigured = () => <WikiRoutes screenOptions={props.screenOptions} />;
  const ProfileRoutesConfigured = () => <ProfileRoutes screenOptions={props.screenOptions} />;

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
      <AppTab.Screen name="Home" component={HomeScreenWithContext} />
      <AppTab.Screen name="Wiki" component={WikiRoutesConfigured} />
      <AppTab.Screen name="Profile" component={ProfileRoutesConfigured} />
    </AppTab.Navigator>
  );
}
