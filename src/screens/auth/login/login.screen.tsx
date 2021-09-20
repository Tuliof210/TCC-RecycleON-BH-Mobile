import React, { useContext } from 'react';
import { Alert, Image, View, Text, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import LoginForm from './login-form/login-form.component';

import MainContainerComponent from 'common/components/main-container.component';
import LineBreakComponent from 'common/components/line-break.component';
import SocialButtonComponent from 'common/components/social-button.component';

import AuthContext from 'context/auth';

import styles, { backgroundGradient } from './login.style';

export default (props: { navigation: NavigationProp<any, any> }): JSX.Element => {
  const router = props.navigation;

  const { login } = useContext(AuthContext);

  //--------------------------------------------------------------

  function handleLogin({ email, password }: { email: string; password: string }) {
    console.log({ email, password });

    login({
      email: email.trim(),
      password: password.trim(),
    });
  }

  function handleFacebookLogin() {
    Alert.alert('Login Facebook', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }

  function handleGoogleLogin() {
    Alert.alert('Login Google', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 0, y: 0.3 }}>
        <Image style={styles.screenMainIcon} source={require('assets/images/login-art.png')} />
        <MainContainerComponent height="75%">
          <Text style={styles.mainLabel}>Login</Text>

          <LoginForm handler={handleLogin} />

          <View style={styles.containerLineBreak}>
            <LineBreakComponent>Ou</LineBreakComponent>
          </View>

          <View style={styles.socialLoginButtons}>
            <SocialButtonComponent
              size={styles.socialButtonSize}
              icon={require('assets/images/facebook.png')}
              handler={handleFacebookLogin}
            />
            <SocialButtonComponent
              size={styles.socialButtonSize}
              icon={require('assets/images/google.png')}
              handler={handleGoogleLogin}
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
