import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import styles, { backgroundGradient } from './profile-bookmarks.style';

export default function ProfileBookmarksScreen(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 1, y: 1 }}>
        <View></View>
      </LinearGradient>
    </SafeAreaView>
  );
}
