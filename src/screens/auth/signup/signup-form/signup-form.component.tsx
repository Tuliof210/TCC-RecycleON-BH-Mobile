import React, { Fragment, useState } from 'react';
import { Image, ImageProps, View, Text, TouchableHighlight } from 'react-native';

import { withFormik } from 'formik';
import * as Yup from 'yup';

import { SignupData } from 'common/constants/types';
import { EmailRegex, PasswordRegex } from 'common/constants/regex';
import { FormWarningComponent, InputTextComponent, PrimaryButtonComponent } from 'common/components';

import styles from './signup-form.style';
import { AppImages } from 'assets/images';

export default function SignupForm({ handler }: { handler: (data: SignupData) => void }): JSX.Element {
  const fields = { name: '', email: '', password: '', confirmPassword: '' };

  const schema = Yup.object().shape({
    name: Yup.string().strict().required('Preencha o campo de nome'),
    email: Yup.string().strict().matches(EmailRegex, 'Digite um e-mail válido').required('Preencha o campo de e-mail'),
    password: Yup.string()
      .strict()
      .matches(PasswordRegex, 'Min. 6 caracteres, com ao menos 1 letra e 1 número')
      .required('Preencha o campo de senha'),
    confirmPassword: Yup.string()
      .strict()
      .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
      .required('Repita sua senha'),
  });

  const Form = withFormik({
    validationSchema: schema,
    validateOnBlur: true,
    validateOnChange: false,

    mapPropsToValues: () => fields,
    handleSubmit: (values) => {
      handler({ name: values.name, email: values.email, password: values.password });
    },
  })((props): JSX.Element => {
    //----------------------------------------------------------------------------------------------------------

    const [hidePassword, setHidePassword] = useState(true);

    function getHidePasswordIcon(): ImageProps {
      return hidePassword ? AppImages['eye-close'] : AppImages['eye-open'];
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
            <FormWarningComponent message={props.errors.name} position={styles.formWarning} />
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
            <FormWarningComponent message={props.errors.email} position={styles.formWarning} />
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
            <FormWarningComponent message={props.errors.password} position={styles.formWarning} />
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
            <FormWarningComponent message={props.errors.confirmPassword} position={styles.formWarning} />
          </View>
        </View>
        <PrimaryButtonComponent size={styles.submitButton} label="Criar" handler={props.handleSubmit} />
      </Fragment>
    );
  });

  return <Form />;
}
