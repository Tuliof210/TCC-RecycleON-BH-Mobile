import React, { useContext } from 'react';
import { View, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from 'context';

import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

import styles, { backgroundGradient } from './profile-main.style';

export default function ProfileMainScreen(props: { navigation: NavigationProp<any, any> }): JSX.Element {
  const router = props.navigation;
  const { user, signOut } = useContext(AuthContext);

  function navigateTo(route: string) {
    router.navigate(route);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={styles.container} colors={backgroundGradient} end={{ x: 0, y: 1 }}>
        <ProfileCardComponent name={user?.name} email={user?.email} />
        <ProfileMenuComponent signOut={signOut} navigatorHandler={navigateTo} />
      </LinearGradient>
    </SafeAreaView>
  );
}
