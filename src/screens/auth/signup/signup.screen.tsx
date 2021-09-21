import React, { useContext } from 'react';
import { Alert, Image, View, Text, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import SignupForm from './signup-form/signup-form.component';

import MainContainerComponent from 'common/components/main-container.component';
import SocialAuthButtonComponent from 'common/components/social-auth-button.component';
import LineBreakComponent from 'common/components/line-break.component';

import AuthContext from 'context/auth';

import styles, { backgroundGradient } from './signup.style';

export default (props: { navigation: NavigationProp<any, any> }): JSX.Element => {
  const router = props.navigation;

  const { signUp } = useContext(AuthContext);

  //--------------------------------------------------------------

  function handleSignup({ name, email, password }: { name: string; email: string; password: string }) {
    console.log({ name, email, password });

    signUp({
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    });
  }

  function handleFacebookAuth() {
    Alert.alert('Auth With Facebook', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }

  function handleGoogleAuth() {
    Alert.alert('Auth With Google', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
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

          <View style={styles.socialSignupButtons}>
            <SocialAuthButtonComponent
              size={styles.socialButtonSize}
              icon={require('assets/images/facebook.png')}
              handler={handleFacebookAuth}
            />
            <SocialAuthButtonComponent
              size={styles.socialButtonSize}
              icon={require('assets/images/google.png')}
              handler={handleGoogleAuth}
            />
          </View>

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
