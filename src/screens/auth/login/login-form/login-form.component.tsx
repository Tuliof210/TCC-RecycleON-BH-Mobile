import React, { Fragment, useState } from 'react';
import { Alert, Image, ImageProps, View, Text, TouchableHighlight } from 'react-native';

import InputTextComponent from 'common/components/input-text.component';
import PrimaryButtonComponent from 'common/components/primary-button.component';

import styles from './login-form.style';

export default (props: { handler: (userData: { email: string; password: string }) => void }): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  //--------------------------------------------------------------

  function getHidePasswordIcon(): ImageProps {
    return hidePassword ? require('assets/images/eye-closed.png') : require('assets/images/eye-open.png');
  }

  function setField(key: string) {
    return (text: string): void => {
      if (key == 'email') setEmail(text);
      if (key == 'password') setPassword(text);
    };
  }

  function handleSubmit() {
    props.handler({ email, password });
  }

  //--------------------------------------------------------------

  return (
    <Fragment>
      <View style={styles.inputBoxesContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <InputTextComponent
            size={styles.inputText}
            placeholder={'Insira seu e-mail'}
            text={email}
            keyboardType={'email-address'}
            handler={setField('email')}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Senha</Text>
          <InputTextComponent
            size={styles.inputText}
            placeholder={'Insira sua senha'}
            text={password}
            secureText={hidePassword}
            handler={setField('password')}
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
      <PrimaryButtonComponent size={styles.submitButton} label="Entrar" handler={handleSubmit} />
    </Fragment>
  );
};
