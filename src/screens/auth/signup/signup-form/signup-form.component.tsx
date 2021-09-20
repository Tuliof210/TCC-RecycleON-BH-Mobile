import React, { Fragment, useState } from 'react';
import { Image, ImageProps, View, Text, TouchableHighlight } from 'react-native';

import { withFormik } from 'formik';
import * as Yup from 'yup';

import InputTextComponent from 'common/components/input-text.component';
import PrimaryButtonComponent from 'common/components/primary-button.component';

import styles from './signup-form.style';
import { EmailRegex, PasswordRegex } from 'common/constants/regex';

export default ({ handler }: { handler: (userData: { name: string; email: string; password: string }) => void }) => {
  const fields = { name: '', email: '', password: '', confirmPassword: '' };

  const schema = Yup.object().shape({
    name: Yup.string().strict().required('Preencha o campo de nome'),
    email: Yup.string().strict().matches(EmailRegex, 'Digite um e-mail válido').required('Preencha o campo de e-mail'),
    password: Yup.string()
      .strict()
      .matches(PasswordRegex, 'A senha deve ter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
  });

  const Form = withFormik({
    mapPropsToValues: () => fields,
    validationSchema: schema,
    handleSubmit: (values) => {
      handler({ name: values.name, email: values.email, password: values.password });
    },
  })((props): JSX.Element => {
    //----------------------------------------------------------------------------------------------------------

    const [hidePassword, setHidePassword] = useState(true);

    function getHidePasswordIcon(): ImageProps {
      return hidePassword ? require('assets/images/eye-closed.png') : require('assets/images/eye-open.png');
    }

    function setField(key: string) {
      return (text: string): void => {
        props.setFieldValue(key, text);
      };
    }

    //----------------------------------------------------------------------------------------------------------

    return (
      <Fragment>
        <View style={styles.inputBoxesContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Nome</Text>
            <InputTextComponent
              size={styles.inputText}
              placeholder={'Insira seu nome'}
              text={props.values.name}
              handler={setField('name')}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <InputTextComponent
              size={styles.inputText}
              placeholder={'Insira seu e-mail'}
              text={props.values.email}
              keyboardType={'email-address'}
              handler={setField('email')}
            />
            {props.errors.email && <Text>{props.errors.email}</Text>}
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Senha</Text>
            <InputTextComponent
              size={styles.inputText}
              placeholder={'Insira sua senha'}
              text={props.values.password}
              secureText={hidePassword}
              handler={setField('password')}
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
              handler={setField('confirmPassword')}
            />
          </View>
        </View>
        <PrimaryButtonComponent size={styles.submitButton} label="Criar" handler={props.handleSubmit} />
      </Fragment>
    );
  });

  return <Form />;
};
