import React from 'react';
import { Alert, StyleSheet, Image, ImageProps, View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../constants/styles';

import ContainerInputComponent from '../components/layouts/ContainerInput.component';
import InputTextComponent from '../components/inputs/InputText.component';
import PrimaryButtonComponent from '../components/buttons/PrimaryButton.component';
import SocialButtonComponent from '../components/buttons/SocialButton.component';
import LineBreakComponent from '../components/common/LineBreak.component';

export default class LoginScreen extends React.Component {
  state: { email: string; password: string; hidePassword: boolean };
  passwordRules = 'Min. 6 caracteres, c/ 1 letra e 1 número';

  constructor(props: Record<string, any>) {
    super(props);
    this.state = { email: '', password: '', hidePassword: true };
  }

  getHidePasswordIcon(): ImageProps {
    return this.state.hidePassword
      ? require('../assets/images/eye-closed.png')
      : require('../assets/images/eye-open.png');
  }

  render() {
    return (
      <ScrollView>
        <LinearGradient
          style={styles.screen}
          colors={[gradient.get('fade-green-bg').start, gradient.get('fade-green-bg').end]}
          end={{ x: 0, y: 0.3 }}
        >
          <Image style={styles.screenMainIcon} source={require('../assets/images/login-art.png')} />
          <ContainerInputComponent height="75%">
            <Text style={styles.mainLabel}>Login</Text>

            {this.renderInputBoxes()}
            {this.renderLoginButton()}

            <View style={styles.containerLineBreak}>
              <LineBreakComponent>Ou</LineBreakComponent>
            </View>

            {this.renderSocialLoginButtons()}
            {this.renderRedirectToSignup()}
          </ContainerInputComponent>
        </LinearGradient>
      </ScrollView>
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  renderInputBoxes(): JSX.Element {
    return (
      <View style={styles.inputBoxesContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>E-mail</Text>
          {this.renderInputEmail()}
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Senha</Text>
          {this.renderInputPassword()}
          {this.renderForgotPassword()}
          {this.renderToggleHidenPassword()}
        </View>
      </View>
    );
  }

  renderInputEmail(): JSX.Element {
    return (
      <InputTextComponent
        size={styles.inputText}
        placeholder={'Insira seu e-mail'}
        text={this.state.email}
        secureText={this.state.hidePassword}
        inputFunction={(text: string) => {
          this.setState({ email: text });
        }}
      />
    );
  }

  renderInputPassword(): JSX.Element {
    return (
      <InputTextComponent
        size={styles.inputText}
        placeholder={'Insira sua senha'}
        text={this.state.password}
        secureText={this.state.hidePassword}
        inputFunction={(text: string) => {
          this.setState({ password: text });
        }}
      />
    );
  }

  renderForgotPassword(): JSX.Element {
    return (
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
    );
  }

  renderToggleHidenPassword(): JSX.Element {
    return (
      <TouchableHighlight
        style={styles.toggleHidenPassword}
        activeOpacity={1}
        underlayColor="transparent"
        onPress={() => {
          this.setState({ hidePassword: !this.state.hidePassword });
        }}
      >
        <Image style={styles.toggleHidenPasswordIcon} source={this.getHidePasswordIcon()} />
      </TouchableHighlight>
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  renderLoginButton(): JSX.Element {
    return (
      <PrimaryButtonComponent
        size={styles.loginButton}
        label="Entrar"
        btnFunction={() => {
          this.setState({ email: '', password: '' });
          Alert.alert('Login', `email: ${this.state.email}\npassword: ${this.state.password}`, [
            { text: 'Cancel' },
            { text: 'OK' },
          ]);
        }}
      />
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  renderSocialLoginButtons(): JSX.Element {
    return (
      <View style={styles.socialLoginButtons}>
        {this.renderFacebookLoginButton({ width: '44%', height: 55 })}
        {this.renderGoogleLoginButton({ width: '44%', height: 55 })}
      </View>
    );
  }

  renderFacebookLoginButton(size: { width: number | string; height: number | string }): JSX.Element {
    return (
      <SocialButtonComponent
        size={size}
        icon={require('../assets/images/facebook.png')}
        btnFunction={() => {
          Alert.alert('Login Facebook', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
        }}
      />
    );
  }
  renderGoogleLoginButton(size: { width: number | string; height: number | string }): JSX.Element {
    return (
      <SocialButtonComponent
        size={size}
        icon={require('../assets/images/google.png')}
        btnFunction={() => {
          Alert.alert('Login Google', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
        }}
      />
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  renderRedirectToSignup(): JSX.Element {
    return (
      <Text style={styles.redirectToSignup}>
        É novo por aqui?{' '}
        <Text
          style={styles.redirectToSignupHighlight}
          onPress={() => {
            Alert.alert('Create Account', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
          }}
        >
          Crie sua conta
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  redirectToSignup: {
    marginVertical: 30,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Medium',
    fontSize: 16,
    color: colors.get('gray-font-light'),
  },
  redirectToSignupHighlight: { fontFamily: 'Ubuntu-Bold', color: colors.get('green-dark') },
  socialLoginButtons: { flexDirection: 'row', justifyContent: 'space-between' },
  loginButton: { width: '100%', height: 50 },
  toggleHidenPassword: { right: 10, bottom: 40, position: 'absolute' },
  toggleHidenPasswordIcon: { width: 30, height: 30 },
  forgotPassword: { flexDirection: 'row', justifyContent: 'flex-end', width: '100%' },
  inputBoxesContainer: { marginBottom: 20 },
  inputText: { width: '100%', height: 40 },

  screen: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  screenMainIcon: { width: 180, height: 200, resizeMode: 'contain', position: 'relative', bottom: -25 },

  containerLineBreak: { marginVertical: 30 },

  forgotPasswordTxt: {
    marginTop: 15,
    marginRight: 5,
    fontSize: 13,
    width: 200,
    textAlign: 'right',
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
  mainLabel: {
    marginBottom: 30,
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    color: colors.get('green-dark'),
  },
});
