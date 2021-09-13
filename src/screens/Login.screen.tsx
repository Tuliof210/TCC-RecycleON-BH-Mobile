import React, { Fragment } from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors } from '../constants/styles';

const LoginScreen = () => {
  return (
    <Fragment>
      <Text style={styles.text}>Tela de login</Text>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.get('white'),
  },
});

export default LoginScreen;
