import React, { useContext } from 'react';
import { Alert, Image, View, Text, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import SocialAuth from '../social-auth/social-auth.component';
import SignupForm from './signup-form/signup-form.component';
import { LineBreakComponent, MainContainerComponent } from 'common/components';

import { SignupData } from 'common/constants/types';
import { AuthContext } from 'context';

import styles, { backgroundGradient } from './signup.style';

export default function SignupScreen(props: { navigation: NavigationProp<any, any> }): JSX.Element {
  const router = props.navigation;

  const { signUp } = useContext(AuthContext);

  //--------------------------------------------------------------

  function handleSignup({ name, email, password }: SignupData) {
    signUp({
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    }).catch((error: any) => {
      const message: string = error.message;
      handleError(message);
    });
  }

  function handleError(message: string) {
    const errorMessage = message.includes('code 409')
      ? 'Já existe uma conta cadastrada com esse e-mail'
      : 'Não foi possível criar uma conta';

    Alert.alert(`Erro ao cadastrar`, errorMessage);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 0, y: 0.3 }}>
        <Image style={styles.screenMainIcon} source={require('assets/images/signup-art.png')} />
        <MainContainerComponent height="90%">
          <Text style={styles.mainLabel}>Cadastrar</Text>

          <SignupForm handler={handleSignup} />

          <View style={styles.containerLineBreak}>
            <LineBreakComponent>Ou</LineBreakComponent>
          </View>

          <SocialAuth />

          <Text style={styles.redirectToSignIn}>
            Já possui uma conta?{' '}
            <Text
              style={styles.redirectToSignInHighlight}
              onPress={() => {
                router.goBack();
              }}
            >
              Clique aqui para entrar
            </Text>
          </Text>
        </MainContainerComponent>
      </LinearGradient>
    </SafeAreaView>
  );
}
