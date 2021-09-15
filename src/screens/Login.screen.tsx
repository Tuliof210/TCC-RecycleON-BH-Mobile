import React from 'react';
import { Alert, StyleSheet, Image, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../constants/styles';

import ContainerInput from '../components/layouts/ContainerInput.component';
import InputText from '../components/inputs/InputText.component';
import PrimaryButton from '../components/buttons/PrimaryButton.component';
import SocialButton from '../components/buttons/SocialButton.component';
import LineBreak from '../components/common/LineBreak.component';

export default class LoginScreen extends React.Component {
  initialState: { email: string; password: string };
  state: { email: string; password: string };

  bindFunctions() {
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.logon = this.logon.bind(this);
    this.logonFacebook = this.logonFacebook.bind(this);
    this.logonGoogle = this.logonGoogle.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  constructor(props: Record<string, any>) {
    super(props);

    this.initialState = { email: '', password: '' };
    this.state = this.initialState;

    this.bindFunctions();
  }

  getEmail(text: string) {
    this.setState({ email: text });
  }
  getPassword(text: string) {
    this.setState({ password: text });
  }

  logon() {
    this.setState(this.initialState);
    Alert.alert('Login', `email: ${this.state.email}\npassword: ${this.state.password}`, [
      { text: 'Cancel' },
      { text: 'OK' },
    ]);
  }

  logonFacebook() {
    Alert.alert('Login Facebook', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }

  logonGoogle() {
    Alert.alert('Login Google', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }

  createAccount() {
    Alert.alert('Create Account', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }
  forgotPassword() {
    Alert.alert('Forgot Password', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }

  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={[gradient.get('fade-green-bg').start, gradient.get('fade-green-bg').end]}
        end={{ x: 0, y: 0.3 }}
      >
        <Image style={styles.screenArt} source={require('../assets/images/login-art.png')} />
        <ContainerInput height="75%">
          <Text style={styles.pageTitle}>Login</Text>
          <View style={styles.loginTextInputsBox}>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>E-mail</Text>
              <InputText
                size={{ width: '100%', height: 50 }}
                placeholder={'Insira seu e-mail'}
                text={this.state.email}
                secureText={false}
                inputFunction={this.getEmail}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Senha</Text>
              <InputText
                size={{ width: '100%', height: 50 }}
                placeholder={'Insira sua senha'}
                text={this.state.password}
                secureText={true}
                inputFunction={this.getPassword}
              />
              <Text onPress={this.forgotPassword} style={[styles.inputLabel, styles.forgotPassword]}>
                esqueci minha senha
              </Text>
            </View>
          </View>
          <PrimaryButton size={{ width: '100%', height: 50 }} btnFunction={this.logon}>
            Entrar
          </PrimaryButton>
          <LineBreak>Ou</LineBreak>
          <View style={styles.socialLogin}>
            <SocialButton
              size={{ width: '44%', height: 55 }}
              icon={require('../assets/images/facebook.png')}
              btnFunction={this.logonFacebook}
            />
            <SocialButton
              size={{ width: '44%', height: 55 }}
              icon={require('../assets/images/google.png')}
              btnFunction={this.logonGoogle}
            />
          </View>
          <Text style={styles.footerText}>
            É novo por aqui?{' '}
            <Text onPress={this.createAccount} style={styles.footerTextHighlight}>
              Crie sua conta
            </Text>
          </Text>
        </ContainerInput>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pageTitle: {
    marginBottom: 30,
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    color: colors.get('green-dark'),
  },
  loginTextInputsBox: {
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 12,
    fontFamily: 'Ubuntu-Medium',
    color: colors.get('green-dark'),
    marginLeft: 5,
    marginBottom: 5,
  },
  forgotPassword: {
    marginTop: 10,
    marginRight: 5,
    fontSize: 13,
    textAlign: 'right',
  },
  screenArt: {
    width: 200,
    height: 200,
    position: 'relative',
    bottom: -18,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    marginVertical: 30,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Medium',
    fontSize: 16,
    color: colors.get('gray-font-light'),
  },
  footerTextHighlight: {
    fontFamily: 'Ubuntu-Bold',
    color: colors.get('green-dark'),
  },
});
