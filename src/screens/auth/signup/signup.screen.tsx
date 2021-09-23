import React, { useContext } from 'react';
import { Image, View, Text, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import MainContainerComponent from 'common/components/main-container.component';
import LineBreakComponent from 'common/components/line-break.component';
import SignupForm from './signup-form/signup-form.component';
import SocialAuth from '../social-auth/social-auth.component';

import { SignupData } from 'common/constants/types';
import AuthContext from 'context/auth.context';

import styles, { backgroundGradient } from './signup.style';

export default (props: { navigation: NavigationProp<any, any> }): JSX.Element => {
  const router = props.navigation;

  const { signUp } = useContext(AuthContext);

  //--------------------------------------------------------------

  function handleSignup({ name, email, password }: SignupData) {
    console.log({ name, email, password });

    signUp({
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    });
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
};
