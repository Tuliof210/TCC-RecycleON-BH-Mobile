import React, { useContext } from 'react';
import { View, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from 'context';

import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

import styles, { backgroundGradient } from './profile.style';

export default function ProfileScreen(props: { navigation: NavigationProp<any, any> }): JSX.Element {
  const { user, signOut } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={styles.container} colors={backgroundGradient} end={{ x: 0, y: 0.3 }}>
        <ProfileCardComponent name={user?.name} email={user?.email} />
        <ProfileMenuComponent signOut={signOut} />
      </LinearGradient>
    </SafeAreaView>
  );
}
