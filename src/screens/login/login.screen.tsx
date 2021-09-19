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
  const { signed, token, user } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const router = props.navigation;

  function getHidePasswordIcon(): ImageProps {
    return hidePassword ? require('assets/images/eye-closed.png') : require('assets/images/eye-open.png');
  }

  //------------------------------------------------------------------------------------------------------------------

  function renderInputBoxes(): JSX.Element {
    return (
      <View style={styles.inputBoxesContainer}>
        {renderInputEmail()}
        {renderInputPassword()}
      </View>
    );
  }

  function renderInputEmail(): JSX.Element {
    return (
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
    );
  }

  function renderInputPassword(): JSX.Element {
    return (
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
        {renderForgotPassword()}
        {renderToggleHidenPassword()}
      </View>
    );
  }

  function renderForgotPassword(): JSX.Element {
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

  function renderToggleHidenPassword(): JSX.Element {
    return (
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
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  function renderLoginButton(): JSX.Element {
    return (
      <PrimaryButtonComponent
        size={{ height: 50, width: '100%' }}
        label="Entrar"
        btnFunction={() => {
          setEmail('');
          setPassword('');
          Alert.alert('Login', `email: ${email}\npassword: ${password}`, [{ text: 'Cancel' }, { text: 'OK' }]);
        }}
      />
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  function renderSocialLoginButtons(): JSX.Element {
    return (
      <View style={styles.socialLoginButtons}>
        {renderFacebookLoginButton({ width: '44%', height: 55 })}
        {renderGoogleLoginButton({ width: '44%', height: 55 })}
      </View>
    );
  }

  function renderFacebookLoginButton(size: { width: number | string; height: number | string }): JSX.Element {
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

  function renderGoogleLoginButton(size: { width: number | string; height: number | string }): JSX.Element {
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

  function renderRedirectToSignup(): JSX.Element {
    return (
      <Text style={styles.redirectToSignup}>
        É novo por aqui?{' '}
        <Text
          style={styles.redirectToSignupHighlight}
          onPress={() => {
            router.navigate('SignUp');
          }}
        >
          Crie sua conta
        </Text>
      </Text>
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  return (
    <ScrollView>
      <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 0, y: 0.3 }}>
        <Image style={styles.screenMainIcon} source={require('assets/images/login-art.png')} />
        <MainContainerComponent height="75%">
          <Text style={styles.mainLabel}>Login</Text>

          {renderInputBoxes()}
          {renderLoginButton()}

          <View style={styles.containerLineBreak}>
            <LineBreakComponent>Ou</LineBreakComponent>
          </View>

          {renderSocialLoginButtons()}
          {renderRedirectToSignup()}
        </MainContainerComponent>
      </LinearGradient>
    </ScrollView>
  );
};
