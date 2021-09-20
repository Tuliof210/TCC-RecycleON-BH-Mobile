import React, { useContext, useState } from 'react';
import { Alert, Image, View, Text, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import SignupForm from './signup-form/signup-form.component';

import MainContainerComponent from 'components/layouts/main-container.component';
import PrimaryButtonComponent from 'components/buttons/primary-button.component';
import SocialButtonComponent from 'components/buttons/social-button.component';
import LineBreakComponent from 'components/common/line-break.component';

import AuthContext from 'context/auth';

import styles, { backgroundGradient } from './signup.style';

export default (props: { navigation: NavigationProp<any, any> }): JSX.Element => {
  const router = props.navigation;

  const { signup } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //--------------------------------------------------------------

  function handleSignup() {
    console.log({ name, email, password, confirmPassword });

    signup({
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    });
  }

  function handleFormChange(key: string, value: string) {
    if (key == 'name') setName(value);
    if (key == 'email') setEmail(value);
    if (key == 'password') setPassword(value);
    if (key == 'confirm-password') setConfirmPassword(value);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 0, y: 0.3 }}>
        <Image style={styles.screenMainIcon} source={require('assets/images/signup-art.png')} />
        <MainContainerComponent height="90%">
          <Text style={styles.mainLabel}>Signup</Text>

          <View style={styles.inputBoxesContainer}>
            <SignupForm values={{ name, email, password, confirmPassword }} onChange={handleFormChange} />
          </View>
          <PrimaryButtonComponent size={{ height: 50, width: '100%' }} label="Criar" btnFunction={handleSignup} />

          <View style={styles.containerLineBreak}>
            <LineBreakComponent>Ou</LineBreakComponent>
          </View>

          <View style={styles.socialSignupButtons}>
            <SocialButtonComponent
              size={styles.socialButtonSize}
              icon={require('assets/images/facebook.png')}
              btnFunction={() => {
                Alert.alert('Signup Facebook', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
              }}
            />
            <SocialButtonComponent
              size={styles.socialButtonSize}
              icon={require('assets/images/google.png')}
              btnFunction={() => {
                Alert.alert('Signup Google', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
              }}
            />
          </View>

          <Text style={styles.redirectToLogin}>
            Já possui uma conta?{' '}
            <Text
              style={styles.redirectToLoginHighlight}
              onPress={() => {
                router.goBack();
              }}
            >
              Faça login
            </Text>
          </Text>
        </MainContainerComponent>
      </LinearGradient>
    </SafeAreaView>
  );
};
