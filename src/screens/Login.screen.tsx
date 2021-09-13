import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../constants/styles';

import ContainerInput from '../components/ContainerInput.component';

const LoginScreen = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        gradient.get('fade-green').start,
        gradient.get('fade-green').end,
      ]}
      end={{ x: 0, y: 0.3 }}
    >
      <Image
        style={styles.art}
        source={require('../assets/images/login-art.png')}
      />
      <ContainerInput height="70%">
        <Text style={styles.text}>Tela de login</Text>
      </ContainerInput>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    color: colors.get('black-dark'),
  },
  art: {
    width: 200,
    height: 200,
    position: 'relative',
    bottom: -18,
  },
});

export default LoginScreen;
