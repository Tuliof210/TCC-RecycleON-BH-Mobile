import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WikiMainScreen from 'screens/app/wiki/wiki-main/wiki-main.screen';
import WikiItemScreen from 'screens/app/wiki/wiki-item/wiki-item.screen';

const WikiStack = createNativeStackNavigator();

export default function WikiRoutes(props: {
  screenOptions: { headerShown: boolean; contentStyle: { backgroundColor: string } };
}): JSX.Element {
  return (
    <WikiStack.Navigator screenOptions={props.screenOptions}>
      <WikiStack.Screen name="wikiMain" component={WikiMainScreen} />
      <WikiStack.Screen name="wikiItem" component={WikiItemScreen} />
    </WikiStack.Navigator>
  );
}
