import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { NavigationProp, Route } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { WikiItem } from 'common/constants/types';

import { WikiContext } from 'context';

import styles, { backgroundGradient } from './wiki-item.style';

export default function WikiMainScreen(props: {
  navigation: NavigationProp<any, any>;
  route: Route<any, { itemId: string }>;
}): JSX.Element {
  const router = props.navigation;
  const { params } = props.route;

  const { getWikiItem } = useContext(WikiContext);
  const [wikiItem, setWikiItem] = useState({} as WikiItem);

  useEffect(() => {
    (async () => {
      await getWikiItem(params.itemId).then(populateWikiItem);
    })();
  }, []);

  function populateWikiItem(item: WikiItem | void) {
    if (item) setWikiItem(item);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 1, y: 1 }}>
        <View></View>
      </LinearGradient>
    </SafeAreaView>
  );
}
