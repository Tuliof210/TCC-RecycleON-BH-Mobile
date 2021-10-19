import React, { useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from 'context';

import { ProfileUpdateForm } from './profile-update-form/profile-update-form.component';
import { ReturnButtonComponent, MainContainerComponent } from 'common/components';

import { UpdateUserData } from 'common/constants/types';

import styles, { backgroundGradient } from './profile-update.style';

export default function ProfileUpdateScreen(props: { navigation: NavigationProp<any, any> }): JSX.Element {
  const router = props.navigation;

  const { user } = useContext(AuthContext);

  function handleUpdate({ name, email, password }: UpdateUserData) {
    console.log({ name, email, password });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 0, y: 0.3 }}>
        <MainContainerComponent height="90%">
          <ReturnButtonComponent navigation={router}>Voltar</ReturnButtonComponent>

          <ProfileUpdateForm
            handler={handleUpdate}
            userData={{ name: user?.name || '', email: user?.email || '', password: 'senha123' || '' }}
          />
        </MainContainerComponent>
      </LinearGradient>
    </SafeAreaView>
  );
}
