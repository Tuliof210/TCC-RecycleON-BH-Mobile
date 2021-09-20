import React, { Fragment, useState } from 'react';
import { Image, ImageProps, View, Text, TouchableHighlight } from 'react-native';

import InputTextComponent from 'components/inputs/input-text.component';

import styles from './signup-form.style';

export default (props: {
  values: { name: string; email: string; password: string; confirmPassword: string };
  onChange: (key: string, value: string) => void;
}): JSX.Element => {
  const [hidePassword, setHidePassword] = useState(true);

  //--------------------------------------------------------------

  function getHidePasswordIcon(): ImageProps {
    return hidePassword ? require('assets/images/eye-closed.png') : require('assets/images/eye-open.png');
  }

  function getValue(key: string) {
    return (value: string) => {
      props.onChange(key, value);
    };
  }

  //--------------------------------------------------------------

  return (
    <Fragment>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Nome</Text>
        <InputTextComponent
          size={styles.inputText}
          placeholder={'Insira seu nome'}
          text={props.values.name}
          secureText={false}
          handler={getValue('name')}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <InputTextComponent
          size={styles.inputText}
          placeholder={'Insira seu e-mail'}
          text={props.values.email}
          keyboardType={'email-address'}
          secureText={false}
          handler={getValue('email')}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Senha</Text>
        <InputTextComponent
          size={styles.inputText}
          placeholder={'Insira sua senha'}
          text={props.values.password}
          secureText={hidePassword}
          handler={getValue('password')}
        />
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
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Confirmar Senha</Text>
        <InputTextComponent
          size={styles.inputText}
          placeholder={'Confirme sua senha'}
          text={props.values.confirmPassword}
          secureText={hidePassword}
          handler={getValue('confirm-password')}
        />
      </View>
    </Fragment>
  );
};
