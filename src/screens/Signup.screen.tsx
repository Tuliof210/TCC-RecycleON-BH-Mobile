import React, { Fragment } from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors } from '../constants/styles';

const SignupScreen = () => {
  return (
    <Fragment>
      <Text style={styles.text}>Tela de signup</Text>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.get('black-light'),
  },
});

export default SignupScreen;
