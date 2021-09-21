import React, { useContext } from 'react';
import { Alert, Image, View, Text, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import SignInForm from './signin-form/signin-form.component';

import MainContainerComponent from 'common/components/main-container.component';
import LineBreakComponent from 'common/components/line-break.component';
import SocialAuthButtonComponent from 'common/components/social-auth-button.component';

import AuthContext from 'context/auth';

import styles, { backgroundGradient } from './signin.style';

export default (props: { navigation: NavigationProp<any, any> }): JSX.Element => {
  const router = props.navigation;

  const { signIn } = useContext(AuthContext);

  //--------------------------------------------------------------

  function handleSignIn({ email, password }: { email: string; password: string }) {
    console.log({ email, password });

    signIn({
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
        <Image style={styles.screenMainIcon} source={require('assets/images/sigin-art.png')} />
        <MainContainerComponent height="75%">
          <Text style={styles.mainLabel}>Entrar</Text>

          <SignInForm handler={handleSignIn} />

          <View style={styles.containerLineBreak}>
            <LineBreakComponent>Ou</LineBreakComponent>
          </View>

          <View style={styles.socialAuthButtons}>
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
          <Text style={styles.redirectToSignup}>
            É novo por aqui?{' '}
            <Text
              style={styles.redirectToSignupHighlight}
              onPress={() => {
                router.navigate('signup');
              }}
            >
              Crie sua conta
            </Text>
          </Text>
        </MainContainerComponent>
      </LinearGradient>
    </SafeAreaView>
  );
};
