import React from 'react';
import { Alert, StyleSheet, Image, ImageProps, View, Text, TouchableHighlight, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../constants/styles';

import ContainerInputComponent from '../components/layouts/ContainerInput.component';
import InputTextComponent from '../components/inputs/InputText.component';
import LineBreakComponent from '../components/common/LineBreak.component';
import PrimaryButtonComponent from '../components/buttons/PrimaryButton.component';
import SocialButtonComponent from '../components/buttons/SocialButton.component';

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
        secureText={false}
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
  containerLineBreak: {
    marginVertical: 30,
  },
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  forgotPasswordTxt: {
    fontSize: 13,
    marginRight: 5,
    marginTop: 15,
    textAlign: 'right',
    width: 200,
  },
  inputBox: {
    marginBottom: 15,
    position: 'relative',
  },
  inputBoxesContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: colors.get('green-dark'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 5,
  },
  inputText: {
    height: 40,
    width: '100%',
  },
  loginButton: {
    height: 50,
    width: '100%',
  },
  mainLabel: {
    color: colors.get('green-dark'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    marginBottom: 30,
  },
  redirectToSignup: {
    color: colors.get('gray-font-light'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 16,
    marginVertical: 30,
    textAlign: 'center',
  },
  redirectToSignupHighlight: {
    color: colors.get('green-dark'),
    fontFamily: 'Ubuntu-Bold',
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  screenMainIcon: {
    bottom: -25,
    height: 200,
    position: 'relative',
    resizeMode: 'contain',
    width: 180,
  },
  socialLoginButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toggleHidenPassword: {
    bottom: 40,
    position: 'absolute',
    right: 10,
  },
  toggleHidenPasswordIcon: {
    height: 30,
    width: 30,
  },
});
