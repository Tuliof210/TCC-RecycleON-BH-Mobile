import React, { useContext, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { WikiContext } from 'context';

import styles, { backgroundGradient } from './wiki-main.style';

export default function WikiMainScreen(): JSX.Element {
  const { getWikiData } = useContext(WikiContext);

  useEffect(() => {
    (async () => {
      await getWikiData();
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 1, y: 1 }}>
        <View></View>
      </LinearGradient>
    </SafeAreaView>
  );
}
