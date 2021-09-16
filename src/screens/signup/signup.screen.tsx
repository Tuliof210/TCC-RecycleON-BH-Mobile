import React from 'react';
import { Alert, Image, ImageProps, View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import MainContainerComponent from 'components/layouts/main-container.component';
import InputTextComponent from 'components/inputs/input-text.component';
import PrimaryButtonComponent from 'components/buttons/primary-button.component';
import SocialButtonComponent from 'components/buttons/social-button.component';
import LineBreakComponent from 'components/common/line-break.component';

import styles, { backgroundGradient } from './signup.style';

export default class SignupScreen extends React.Component {
  state: { name: string; email: string; password: string; confirmPassword: string; hidePassword: boolean };
  router: NavigationProp<any, any>;

  passwordRules = 'Min. 6 caracteres, c/ 1 letra e 1 número';

  constructor(readonly props: { navigation: NavigationProp<any, any> }) {
    super(props);

    this.state = { name: '', email: '', password: '', confirmPassword: '', hidePassword: true };
    this.router = this.props.navigation;
  }

  getHidePasswordIcon(): ImageProps {
    return this.state.hidePassword ? require('assets/images/eye-closed.png') : require('assets/images/eye-open.png');
  }

  render() {
    return (
      <ScrollView>
        <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 0, y: 0.3 }}>
          <Image style={styles.screenMainIcon} source={require('assets/images/signup-art.png')} />
          <MainContainerComponent height="90%">
            <Text style={styles.mainLabel}>Signup</Text>

            {this.renderSocialSignupButtons()}

            <View style={styles.containerLineBreak}>
              <LineBreakComponent>Ou</LineBreakComponent>
            </View>

            {this.renderInputBoxes()}
            {this.renderSignupButton()}
            {this.renderRedirectToLogin()}
          </MainContainerComponent>
        </LinearGradient>
      </ScrollView>
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  renderSocialSignupButtons(): JSX.Element {
    return (
      <View style={styles.socialSignupButtons}>
        {this.renderFacebookSignupButton({ width: '44%', height: 55 })}
        {this.renderGoogleSignupButton({ width: '44%', height: 55 })}
      </View>
    );
  }

  renderFacebookSignupButton(size: { width: number | string; height: number | string }): JSX.Element {
    return (
      <SocialButtonComponent
        size={size}
        icon={require('assets/images/facebook.png')}
        btnFunction={() => {
          Alert.alert('Signup Facebook', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
        }}
      />
    );
  }
  renderGoogleSignupButton(size: { width: number | string; height: number | string }): JSX.Element {
    return (
      <SocialButtonComponent
        size={size}
        icon={require('assets/images/google.png')}
        btnFunction={() => {
          Alert.alert('Signup Google', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
        }}
      />
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  renderInputBoxes(): JSX.Element {
    return (
      <View style={styles.inputBoxesContainer}>
        {this.renderInputName()}
        {this.renderInputEmail()}
        {this.renderInputPassword()}
        {this.renderConfirmPassword()}
      </View>
    );
  }

  renderInputName(): JSX.Element {
    return (
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Nome</Text>
        <InputTextComponent
          size={styles.inputText}
          placeholder={'Insira seu nome'}
          text={this.state.name}
          secureText={false}
          inputFunction={(text: string) => {
            this.setState({ name: text });
          }}
        />
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
        {this.renderToggleHidenPassword()}
      </View>
    );
  }

  renderConfirmPassword(): JSX.Element {
    return (
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Confirmar Senha</Text>
        <InputTextComponent
          size={styles.inputText}
          placeholder={'Confirme sua senha'}
          text={this.state.confirmPassword}
          secureText={this.state.hidePassword}
          inputFunction={(text: string) => {
            this.setState({ confirmPassword: text });
          }}
        />
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

  renderSignupButton(): JSX.Element {
    return (
      <PrimaryButtonComponent
        size={{ height: 50, width: '100%' }}
        label="Criar"
        btnFunction={() => {
          this.setState({ name: '', email: '', password: '', confirmPassword: '', hidePassword: true });
          Alert.alert(
            'Signup',
            `name: ${this.state.name}\nemail: ${this.state.email}\npassword: ${this.state.password}\nmatchPassword: ${
              this.state.password === this.state.confirmPassword
            }`,
            [{ text: 'Cancel' }, { text: 'OK' }],
          );
        }}
      />
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  renderRedirectToLogin(): JSX.Element {
    return (
      <Text style={styles.redirectToLogin}>
        Já possui uma conta?{' '}
        <Text
          style={styles.redirectToLoginHighlight}
          onPress={() => {
            console.log('go back');
            this.router.goBack();
          }}
        >
          Faça login
        </Text>
      </Text>
    );
  }
}
