import React, { useContext, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { WikiContext } from 'context';

import styles, { backgroundGradient } from './wiki-item.style';

export default function WikiMainScreen(): JSX.Element {
  const { getWikiItem } = useContext(WikiContext);

  useEffect(() => {
    (async () => {
      await getWikiItem('af3f455a-e64a-41e6-80a6-9aec5ac1d85a').then(console.log);
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
