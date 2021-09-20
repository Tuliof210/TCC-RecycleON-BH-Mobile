import React, { Fragment, useState } from 'react';
import { Alert, Image, ImageProps, View, Text, TouchableHighlight } from 'react-native';

import InputTextComponent from 'components/inputs/input-text.component';

import styles from './login-form.style';

export default (props: {
  values: { email: string; password: string };
  onChange: (key: string, value: string) => void;
}): JSX.Element => {
  const [hidePassword, setHidePassword] = useState(true);

  function getHidePasswordIcon(): ImageProps {
    return hidePassword ? require('assets/images/eye-closed.png') : require('assets/images/eye-open.png');
  }

  function getEmail(text: string): void {
    props.onChange('email', text);
  }

  function getPassword(text: string): void {
    props.onChange('password', text);
  }

  //--------------------------------------------------------------

  return (
    <Fragment>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <InputTextComponent
          size={styles.inputText}
          placeholder={'Insira seu e-mail'}
          text={props.values.email}
          secureText={false}
          inputFunction={getEmail}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Senha</Text>
        <InputTextComponent
          size={styles.inputText}
          placeholder={'Insira sua senha'}
          text={props.values.password}
          secureText={hidePassword}
          inputFunction={getPassword}
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
    </Fragment>
  );
};
