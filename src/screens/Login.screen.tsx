import React from 'react';
import { Alert, StyleSheet, Image, ImageProps, View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../constants/styles';

import ContainerInput from '../components/layouts/ContainerInput.component';
import InputText from '../components/inputs/InputText.component';
import PrimaryButton from '../components/buttons/PrimaryButton.component';
import SocialButton from '../components/buttons/SocialButton.component';
import LineBreak from '../components/common/LineBreak.component';

export default class LoginScreen extends React.Component {
  state: { email: string; password: string; hidePassword: boolean };
  passwordRules = 'Min. 6 caracteres, c/ 1 letra e 1 número';

  constructor(props: Record<string, any>) {
    super(props);
    this.bindFunctions();

    this.state = { email: '', password: '', hidePassword: true };
  }

  bindFunctions() {
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.logon = this.logon.bind(this);
    this.logonFacebook = this.logonFacebook.bind(this);
    this.logonGoogle = this.logonGoogle.bind(this);
    this.createAccount = this.createAccount.bind(this);

    this.toggleHidePassword = this.toggleHidePassword.bind(this);
    this.getHidePasswordIcon = this.getHidePasswordIcon.bind(this);
  }

  toggleHidePassword() {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  getHidePasswordIcon(): ImageProps {
    return this.state.hidePassword
      ? require('../assets/images/eye-closed.png')
      : require('../assets/images/eye-open.png');
  }

  getEmail(text: string) {
    this.setState({ email: text });
  }
  getPassword(text: string) {
    this.setState({ password: text });
  }

  logon() {
    this.setState({ email: '', password: '' });
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
      <ScrollView>
        <LinearGradient
          style={styles.container}
          colors={[gradient.get('fade-green-bg').start, gradient.get('fade-green-bg').end]}
          end={{ x: 0, y: 0.3 }}
        >
          <Image style={styles.screenArt} source={require('../assets/images/login-art.png')} />

          <ContainerInput height="75%">
            <Text style={styles.pageTitle}>Login</Text>

            <View style={styles.textInputsBox}>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>E-mail</Text>
                <InputText
                  size={{ width: '100%', height: 40 }}
                  placeholder={'Insira seu e-mail'}
                  text={this.state.email}
                  secureText={this.state.hidePassword}
                  inputFunction={this.getEmail}
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Senha</Text>
                <InputText
                  size={{ width: '100%', height: 40 }}
                  placeholder={'Insira sua senha'}
                  text={this.state.password}
                  secureText={this.state.hidePassword}
                  inputFunction={this.getPassword}
                />
                <View style={styles.forgotPasswordBox}>
                  <Text onPress={this.forgotPassword} style={[styles.inputLabel, styles.forgotPassword]}>
                    esqueci minha senha
                  </Text>
                </View>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="transparent"
                  style={styles.hidePassword}
                  onPress={this.toggleHidePassword}
                >
                  <Image style={styles.hidePasswordIcon} source={this.getHidePasswordIcon()} />
                </TouchableHighlight>
              </View>
            </View>

            <PrimaryButton size={{ width: '100%', height: 50 }} btnFunction={this.logon}>
              Entrar
            </PrimaryButton>

            <View style={{ marginVertical: 30 }}>
              <LineBreak>Ou</LineBreak>
            </View>

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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  forgotPassword: {
    marginTop: 15,
    marginRight: 5,
    fontSize: 13,
    width: 200,
    textAlign: 'right',
  },
  forgotPasswordBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
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
  hidePassword: {
    right: 10,
    bottom: 40,
    position: 'absolute',
  },
  hidePasswordIcon: {
    width: 30,
    height: 30,
  },
  inputBox: {
    position: 'relative',
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 12,
    fontFamily: 'Ubuntu-Medium',
    color: colors.get('green-dark'),
    marginLeft: 5,
    marginBottom: 5,
  },
  pageTitle: {
    marginBottom: 30,
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    color: colors.get('green-dark'),
  },
  screenArt: {
    width: 180,
    height: 200,
    resizeMode: 'contain',
    position: 'relative',
    bottom: -25,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputsBox: {
    marginBottom: 20,
  },
});
