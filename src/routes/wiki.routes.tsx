import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WikiMainScreen from 'screens/app/wiki/wiki-main/wiki-main.screen';

const WikiStack = createNativeStackNavigator();

export default function WikiRoutes(props: {
  screenOptions: { headerShown: boolean; contentStyle: { backgroundColor: string } };
}): JSX.Element {
  return (
    <WikiStack.Navigator screenOptions={props.screenOptions}>
      <WikiStack.Screen name="wikiMain" component={WikiMainScreen} />
    </WikiStack.Navigator>
  );
}
