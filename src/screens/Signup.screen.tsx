import React from 'react';
import { Alert, StyleSheet, Image, ImageProps, View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../constants/styles';

import ContainerInputComponent from '../components/layouts/ContainerInput.component';
import InputTextComponent from '../components/inputs/InputText.component';
import PrimaryButtonComponent from '../components/buttons/PrimaryButton.component';
import SocialButtonComponent from '../components/buttons/SocialButton.component';
import LineBreakComponent from '../components/common/LineBreak.component';

export default class SignupScreen extends React.Component {
  state: { name: string; email: string; password: string; confirmPassword: string; hidePassword: boolean };
  passwordRules = 'Min. 6 caracteres, c/ 1 letra e 1 número';

  constructor(props: Record<string, any>) {
    super(props);
    this.bindFunctions();

    this.state = { name: '', email: '', password: '', confirmPassword: '', hidePassword: true };
  }

  bindFunctions() {
    this.getName = this.getName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.signup = this.signup.bind(this);
    this.signupFacebook = this.signupFacebook.bind(this);
    this.signupGoogle = this.signupGoogle.bind(this);
    this.login = this.login.bind(this);

    this.toggleHidePassword = this.toggleHidePassword.bind(this);
    this.getHidePasswordIcon = this.getHidePasswordIcon.bind(this);
  }

  getHidePasswordIcon(): ImageProps {
    return this.state.hidePassword
      ? require('../assets/images/eye-closed.png')
      : require('../assets/images/eye-open.png');
  }

  getName(text: string) {
    this.setState({ name: text });
  }
  getEmail(text: string) {
    this.setState({ email: text });
  }
  getPassword(text: string) {
    this.setState({ password: text });
  }
  checkPassword(text: string) {
    this.setState({ confirmPassword: text });
  }
  toggleHidePassword() {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  signup() {
    this.setState({ name: '', email: '', password: '', confirmPassword: '', hidePassword: true });
    Alert.alert(
      'Signup',
      `name: ${this.state.name}\nemail: ${this.state.email}\npassword: ${this.state.password}\nmatchPassword: ${
        this.state.password === this.state.confirmPassword
      }`,
      [{ text: 'Cancel' }, { text: 'OK' }],
    );
  }
  signupFacebook() {
    Alert.alert('Signup Facebook', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }
  signupGoogle() {
    Alert.alert('Signup Google', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }

  login() {
    Alert.alert('Go To Login', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }

  render() {
    return (
      <ScrollView>
        <LinearGradient
          style={styles.container}
          colors={[gradient.get('fade-green-bg').start, gradient.get('fade-green-bg').end]}
          end={{ x: 0, y: 0.3 }}
        >
          <Image style={styles.screenArt} source={require('../assets/images/signup-art.png')} />
          <ContainerInputComponent height="90%">
            <Text style={styles.pageTitle}>Signup</Text>

            <View style={styles.socialLogin}>
              <SocialButtonComponent
                size={{ width: '44%', height: 55 }}
                icon={require('../assets/images/facebook.png')}
                btnFunction={this.signupFacebook}
              />
              <SocialButtonComponent
                size={{ width: '44%', height: 55 }}
                icon={require('../assets/images/google.png')}
                btnFunction={this.signupGoogle}
              />
            </View>

            <View style={{ marginVertical: 30 }}>
              <LineBreakComponent>Ou</LineBreakComponent>
            </View>

            <View style={styles.textInputsBox}>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Nome</Text>
                <InputTextComponent
                  size={{ width: '100%', height: 40 }}
                  placeholder={'Insira seu nome'}
                  text={this.state.name}
                  secureText={false}
                  inputFunction={this.getName}
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>E-mail</Text>
                <InputTextComponent
                  size={{ width: '100%', height: 40 }}
                  placeholder={'Insira seu e-mail'}
                  text={this.state.email}
                  secureText={false}
                  inputFunction={this.getEmail}
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Senha</Text>
                <InputTextComponent
                  size={{ width: '100%', height: 40 }}
                  placeholder={'Insira sua senha'}
                  text={this.state.password}
                  secureText={this.state.hidePassword}
                  inputFunction={this.getPassword}
                />
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="transparent"
                  style={styles.hidePassword}
                  onPress={this.toggleHidePassword}
                >
                  <Image style={styles.hidePasswordIcon} source={this.getHidePasswordIcon()} />
                </TouchableHighlight>
              </View>

              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Confirmar Senha</Text>
                <InputTextComponent
                  size={{ width: '100%', height: 40 }}
                  placeholder={'Confirme sua senha'}
                  text={this.state.confirmPassword}
                  secureText={this.state.hidePassword}
                  inputFunction={this.checkPassword}
                />
              </View>
            </View>
            <PrimaryButtonComponent size={{ width: '100%', height: 50 }} label="Criar" btnFunction={this.signup} />
            <Text style={styles.footerText}>
              Já possui uma conta?{' '}
              <Text onPress={this.login} style={styles.footerTextHighlight}>
                Faça login
              </Text>
            </Text>
          </ContainerInputComponent>
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
    bottom: 5,
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
    marginBottom: 40,
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    color: colors.get('green-dark'),
  },
  screenArt: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    position: 'relative',
    bottom: -5,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputsBox: {
    marginBottom: 40,
  },
});
