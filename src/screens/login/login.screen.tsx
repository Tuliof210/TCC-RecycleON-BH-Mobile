import React from 'react';
import { Alert, Image, ImageProps, View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import MainContainerComponent from 'components/layouts/main-container.component';
import InputTextComponent from 'components/inputs/input-text.component';
import LineBreakComponent from 'components/common/line-break.component';
import PrimaryButtonComponent from 'components/buttons/primary-button.component';
import SocialButtonComponent from 'components/buttons/social-button.component';

import styles, { backgroundGradient } from './login.style';

export default class LoginScreen extends React.Component {
  state: { email: string; password: string; hidePassword: boolean };
  router: NavigationProp<any, any>;

  constructor(readonly props: { navigation: NavigationProp<any, any> }) {
    super(props);

    this.state = { email: '', password: '', hidePassword: true };
    this.router = this.props.navigation;
  }

  getHidePasswordIcon(): ImageProps {
    return this.state.hidePassword ? require('assets/images/eye-closed.png') : require('assets/images/eye-open.png');
  }

  render() {
    return (
      <ScrollView>
        <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 0, y: 0.3 }}>
          <Image style={styles.screenMainIcon} source={require('assets/images/login-art.png')} />
          <MainContainerComponent height="75%">
            <Text style={styles.mainLabel}>Login</Text>

            {this.renderInputBoxes()}
            {this.renderLoginButton()}

            <View style={styles.containerLineBreak}>
              <LineBreakComponent>Ou</LineBreakComponent>
            </View>

            {this.renderSocialLoginButtons()}
            {this.renderRedirectToSignup()}
          </MainContainerComponent>
        </LinearGradient>
      </ScrollView>
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  renderInputBoxes(): JSX.Element {
    return (
      <View style={styles.inputBoxesContainer}>
        {this.renderInputEmail()}
        {this.renderInputPassword()}
      </View>
    );
  }

  renderInputEmail(): JSX.Element {
    return (
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <InputTextComponent
          size={styles.inputText}
          placeholder={'Insira seu e-mail'}
          text={this.state.email}
          secureText={false}
          inputFunction={(text: string) => {
            this.setState({ email: text });
          }}
        />
      </View>
    );
  }

  renderInputPassword(): JSX.Element {
    return (
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Senha</Text>
        <InputTextComponent
          size={styles.inputText}
          placeholder={'Insira sua senha'}
          text={this.state.password}
          secureText={this.state.hidePassword}
          inputFunction={(text: string) => {
            this.setState({ password: text });
          }}
        />
        {this.renderForgotPassword()}
        {this.renderToggleHidenPassword()}
      </View>
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
        size={{ height: 50, width: '100%' }}
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
        icon={require('assets/images/facebook.png')}
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
        icon={require('assets/images/google.png')}
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
            this.router.navigate('signup');
          }}
        >
          Crie sua conta
        </Text>
      </Text>
    );
  }
}
