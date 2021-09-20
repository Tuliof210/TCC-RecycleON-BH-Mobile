import React, { useContext, useState } from 'react';
import { Alert, Image, View, Text, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import LoginForm from './login-form/login-form.component';

import MainContainerComponent from 'components/layouts/main-container.component';
import LineBreakComponent from 'components/common/line-break.component';
import PrimaryButtonComponent from 'components/buttons/primary-button.component';
import SocialButtonComponent from 'components/buttons/social-button.component';

import AuthContext from 'context/auth';

import styles, { backgroundGradient } from './login.style';

export default (props: { navigation: NavigationProp<any, any> }): JSX.Element => {
  const router = props.navigation;

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //--------------------------------------------------------------

  function handleLogin() {
    login({
      email: email.trim(),
      password: password.trim(),
    });
  }

  function handleFormChange(key: string, value: string) {
    if (key == 'email') setEmail(value);
    if (key == 'password') setPassword(value);
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

          <View style={styles.inputBoxesContainer}>
            <LoginForm values={{ email, password }} onChange={handleFormChange} />
          </View>
          <PrimaryButtonComponent size={{ height: 50, width: '100%' }} label="Entrar" btnFunction={handleLogin} />

          <View style={styles.containerLineBreak}>
            <LineBreakComponent>Ou</LineBreakComponent>
          </View>

          <View style={styles.socialLoginButtons}>
            <SocialButtonComponent
              size={styles.buttonSize}
              icon={require('assets/images/facebook.png')}
              btnFunction={handleFacebookLogin}
            />
            <SocialButtonComponent
              size={styles.buttonSize}
              icon={require('assets/images/google.png')}
              btnFunction={handleGoogleLogin}
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
