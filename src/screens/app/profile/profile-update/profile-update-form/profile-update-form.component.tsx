import React, { Fragment, useState } from 'react';
import { Image, ImageProps, View, Text, TouchableHighlight } from 'react-native';

import { withFormik } from 'formik';
import * as Yup from 'yup';

import { UpdateUserData } from 'common/constants/types';
import { EmailRegex, PasswordRegex } from 'common/constants/regex';
import { FormWarningComponent, InputTextComponent, PrimaryButtonComponent } from 'common/components';

import styles from './profile-update-form.style';
import { AppImages } from 'assets/images';

export function ProfileUpdateForm({
  handler,
  userData,
}: {
  handler: (data: UpdateUserData) => void;
  userData: {
    name: string;
    email: string;
  };
}): JSX.Element {
  const fields = { ...userData };

  const schema = Yup.object().shape({
    name: Yup.string().strict().required('Preencha o campo de nome'),
    email: Yup.string().strict().matches(EmailRegex, 'Digite um e-mail válido').required('Preencha o campo de e-mail'),
  });

  const Form = withFormik({
    validationSchema: schema,
    validateOnBlur: true,
    validateOnChange: false,

    mapPropsToValues: () => fields,
    handleSubmit: (values) => {
      handler({ name: values.name, email: values.email });
    },
  })((props): JSX.Element => {
    //----------------------------------------------------------------------------------------------------------

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
        </View>
        <PrimaryButtonComponent size={styles.submitButton} label="Atualizar" handler={props.handleSubmit} />
      </Fragment>
    );
  });

  return <Form />;
}
