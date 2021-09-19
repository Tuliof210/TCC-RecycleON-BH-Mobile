import React, { useContext, useState } from 'react';
import { Alert, Image, ImageProps, View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import MainContainerComponent from 'components/layouts/main-container.component';
import InputTextComponent from 'components/inputs/input-text.component';
import LineBreakComponent from 'components/common/line-break.component';
import PrimaryButtonComponent from 'components/buttons/primary-button.component';
import SocialButtonComponent from 'components/buttons/social-button.component';

import AuthContext from 'context/auth';

import styles, { backgroundGradient } from './login.style';

export default (props: { navigation: NavigationProp<any, any> }): JSX.Element => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const router = props.navigation;

  function getHidePasswordIcon(): ImageProps {
    return hidePassword ? require('assets/images/eye-closed.png') : require('assets/images/eye-open.png');
  }

  function handleLogin() {
    login({ email, password });
  }

  return (
    <ScrollView>
      <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 0, y: 0.3 }}>
        <Image style={styles.screenMainIcon} source={require('assets/images/login-art.png')} />
        <MainContainerComponent height="75%">
          <Text style={styles.mainLabel}>Login</Text>

          <View style={styles.inputBoxesContainer}>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>E-mail</Text>
              <InputTextComponent
                size={styles.inputText}
                placeholder={'Insira seu e-mail'}
                text={email}
                secureText={false}
                inputFunction={(text: string) => {
                  setEmail(text);
                }}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Senha</Text>
              <InputTextComponent
                size={styles.inputText}
                placeholder={'Insira sua senha'}
                text={password}
                secureText={hidePassword}
                inputFunction={(text: string) => {
                  setPassword(text);
                }}
              />
              <View style={styles.forgotPassword}>
                <Text
                  style={[styles.inputLabel, styles.forgotPasswordTxt]}
                  onPress={() => {
                    Alert.alert('Forgot Password', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
                  }}
                >
                  esqueci minha senha
                </Text>
              </View>
              <TouchableHighlight
                style={styles.toggleHidenPassword}
                activeOpacity={1}
                underlayColor="transparent"
                onPress={() => {
                  setHidePassword(!hidePassword);
                }}
              >
                <Image style={styles.toggleHidenPasswordIcon} source={getHidePasswordIcon()} />
              </TouchableHighlight>
            </View>
          </View>
          <PrimaryButtonComponent size={{ height: 50, width: '100%' }} label="Entrar" btnFunction={handleLogin} />

          <View style={styles.containerLineBreak}>
            <LineBreakComponent>Ou</LineBreakComponent>
          </View>

          <View style={styles.socialLoginButtons}>
            <SocialButtonComponent
              size={{ width: '44%', height: 55 }}
              icon={require('assets/images/facebook.png')}
              btnFunction={() => {
                Alert.alert('Login Facebook', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
              }}
            />
            <SocialButtonComponent
              size={{ width: '44%', height: 55 }}
              icon={require('assets/images/google.png')}
              btnFunction={() => {
                Alert.alert('Login Google', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
              }}
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
    </ScrollView>
  );
};
