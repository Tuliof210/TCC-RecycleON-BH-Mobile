import React, { useContext, useState } from 'react';
import { Alert, Image, ImageProps, View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import MainContainerComponent from 'components/layouts/main-container.component';
import InputTextComponent from 'components/inputs/input-text.component';
import PrimaryButtonComponent from 'components/buttons/primary-button.component';
import SocialButtonComponent from 'components/buttons/social-button.component';
import LineBreakComponent from 'components/common/line-break.component';

import AuthContext from 'context/auth';
import { signIn } from 'services/auth';

import styles, { backgroundGradient } from './signup.style';

export default (props: { navigation: NavigationProp<any, any> }): JSX.Element => {
  const { signed, token, user } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const router = props.navigation;

  function getHidePasswordIcon(): ImageProps {
    return hidePassword ? require('assets/images/eye-closed.png') : require('assets/images/eye-open.png');
  }

  //------------------------------------------------------------------------------------------------------------------

  function renderSocialSignupButtons(): JSX.Element {
    return (
      <View style={styles.socialSignupButtons}>
        {renderFacebookSignupButton({ width: '44%', height: 55 })}
        {renderGoogleSignupButton({ width: '44%', height: 55 })}
      </View>
    );
  }

  function renderFacebookSignupButton(size: { width: number | string; height: number | string }): JSX.Element {
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
  function renderGoogleSignupButton(size: { width: number | string; height: number | string }): JSX.Element {
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

  function renderInputBoxes(): JSX.Element {
    return (
      <View style={styles.inputBoxesContainer}>
        {renderInputName()}
        {renderInputEmail()}
        {renderInputPassword()}
        {renderConfirmPassword()}
      </View>
    );
  }

  function renderInputName(): JSX.Element {
    return (
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Nome</Text>
        <InputTextComponent
          size={styles.inputText}
          placeholder={'Insira seu nome'}
          text={name}
          secureText={false}
          inputFunction={(text: string) => {
            setName(text);
          }}
        />
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
        {renderToggleHidenPassword()}
      </View>
    );
  }

  function renderConfirmPassword(): JSX.Element {
    return (
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Confirmar Senha</Text>
        <InputTextComponent
          size={styles.inputText}
          placeholder={'Confirme sua senha'}
          text={confirmPassword}
          secureText={hidePassword}
          inputFunction={(text: string) => {
            setConfirmPassword(text);
          }}
        />
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

  function renderSignupButton(): JSX.Element {
    return (
      <PrimaryButtonComponent
        size={{ height: 50, width: '100%' }}
        label="Criar"
        btnFunction={async () => {
          const response = await signIn();
          console.log(response);
          console.log({ signed, token, user });
        }}
      />
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  function renderRedirectToLogin(): JSX.Element {
    return (
      <Text style={styles.redirectToLogin}>
        Já possui uma conta?{' '}
        <Text
          style={styles.redirectToLoginHighlight}
          onPress={() => {
            console.log('go back');
            router.goBack();
          }}
        >
          Faça login
        </Text>
      </Text>
    );
  }

  //------------------------------------------------------------------------------------------------------------------

  return (
    <ScrollView>
      <LinearGradient style={styles.screen} colors={backgroundGradient} end={{ x: 0, y: 0.3 }}>
        <Image style={styles.screenMainIcon} source={require('assets/images/signup-art.png')} />
        <MainContainerComponent height="90%">
          <Text style={styles.mainLabel}>Signup</Text>

          {renderSocialSignupButtons()}

          <View style={styles.containerLineBreak}>
            <LineBreakComponent>Ou</LineBreakComponent>
          </View>

          {renderInputBoxes()}
          {renderSignupButton()}
          {renderRedirectToLogin()}
        </MainContainerComponent>
      </LinearGradient>
    </ScrollView>
  );
};
