import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { ProfileUpdateForm } from './profile-update-form/profile-update-form.component';
import { LineBreakComponent, MainContainerComponent } from 'common/components';

import { SignupData } from 'common/constants/types';

import styles, { backgroundGradient } from './profile-update.style';

export default function ProfileUpdateScreen(props: { navigation: NavigationProp<any, any> }): JSX.Element {
  const router = props.navigation;

  function handleUpdate({ name, email, password }: SignupData) {
    console.log({ name, email, password });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 0, y: 0.3 }}>
        <MainContainerComponent height="90%">
          <Text style={styles.mainLabel}>Cadastrar</Text>

          <ProfileUpdateForm handler={handleUpdate} />

          <View style={styles.containerLineBreak}>
            <LineBreakComponent>Ou</LineBreakComponent>
          </View>

          <Text
            style={styles.redirectToSignInHighlight}
            onPress={() => {
              router.goBack();
            }}
          >
            Clique aqui para voltar
          </Text>
        </MainContainerComponent>
      </LinearGradient>
    </SafeAreaView>
  );
}
