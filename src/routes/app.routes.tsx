import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LocationProvider, UserProvider, WikiProvider } from 'context';

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

  const WikiRoutesConfigured = () => <WikiRoutes screenOptions={props.screenOptions} />;
  const ProfileRoutesConfigured = () => <ProfileRoutes screenOptions={props.screenOptions} />;

  const GlobalContextProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
      <LocationProvider>
        <UserProvider>
          <WikiProvider>{children}</WikiProvider>
        </UserProvider>
      </LocationProvider>
    );
  };

  return (
    <GlobalContextProvider>
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
        <AppTab.Screen name="Wiki" component={WikiRoutesConfigured} />
        <AppTab.Screen name="Profile" component={ProfileRoutesConfigured} />
      </AppTab.Navigator>
    </GlobalContextProvider>
  );
}
