import React, { useContext } from 'react';
import { Image, View, Text, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import SignInForm from './signin-form/signin-form.component';
import SocialAuth from '../social-auth/social-auth.component';
import { LineBreakComponent, MainContainerComponent } from 'common/components';

import { SigninData } from 'common/constants/types';
import { AuthContext } from 'context';

import styles, { backgroundGradient } from './signin.style';

export default function SigninScreen(props: { navigation: NavigationProp<any, any> }): JSX.Element {
  const router = props.navigation;

  const { signIn } = useContext(AuthContext);

  //--------------------------------------------------------------

  function handleSignIn({ email, password }: SigninData) {
    signIn({
      email: email.trim(),
      password: password.trim(),
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 0, y: 0.3 }}>
        <Image style={styles.screenMainIcon} source={require('assets/images/signin-art.png')} />
        <MainContainerComponent height="75%">
          <Text style={styles.mainLabel}>Entrar</Text>

          <SignInForm handler={handleSignIn} />

          <View style={styles.containerLineBreak}>
            <LineBreakComponent>Ou</LineBreakComponent>
          </View>

          <SocialAuth />

          <Text style={styles.redirectToSignup}>
            É novo por aqui?{' '}
            <Text
              style={styles.redirectToSignupHighlight}
              onPress={() => {
                router.navigate('signUp');
              }}
            >
              Crie sua conta
            </Text>
          </Text>
        </MainContainerComponent>
      </LinearGradient>
    </SafeAreaView>
  );
}
