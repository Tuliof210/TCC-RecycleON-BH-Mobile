import React from 'react';
import { Alert, StyleSheet, Image, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../constants/styles';

import ContainerInput from '../components/layouts/ContainerInput.component';
import InputText from '../components/inputs/InputText.component';
import PrimaryButton from '../components/buttons/PrimaryButton.component';
import SocialButton from '../components/buttons/SocialButton.component';
import LineBreak from '../components/common/LineBreak.component';

export default () => {
  const getEmail = () => {
    return 'email';
  };

  const logon = () => {
    Alert.alert('Login', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  };

  const logonFacebook = () => {
    Alert.alert('Login Facebook', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  };

  const logonGoogle = () => {
    Alert.alert('Login Google', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  };

  const createAccount = () => {
    Alert.alert('Create Account', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[gradient.get('fade-green-bg').start, gradient.get('fade-green-bg').end]}
      end={{ x: 0, y: 0.3 }}
    >
      <Image style={styles.screenArt} source={require('../assets/images/login-art.png')} />
      <ContainerInput height="70%">
        <Text style={styles.pageTitle}>Login</Text>
        <View>
          <InputText size={{ width: '100%', height: 50 }} placeholder={'Digite seu e-mail'} inputFunction={getEmail} />
        </View>
        <PrimaryButton size={{ width: '100%', height: 50 }} btnFunction={logon}>
          Entrar
        </PrimaryButton>
        <LineBreak>Ou</LineBreak>
        <View style={styles.socialLogin}>
          <SocialButton
            size={{ width: '44%', height: 55 }}
            icon={require('../assets/images/facebook.png')}
            btnFunction={logonFacebook}
          />
          <SocialButton
            size={{ width: '44%', height: 55 }}
            icon={require('../assets/images/google.png')}
            btnFunction={logonGoogle}
          />
        </View>
        <Text style={styles.footerText}>
          É novo por aqui?{' '}
          <Text onPress={createAccount} style={styles.footerTextHighlight}>
            Crie sua conta
          </Text>
        </Text>
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
  pageTitle: {
    marginBottom: 40,
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    color: colors.get('green-dark'),
  },
  screenArt: {
    width: 200,
    height: 200,
    position: 'relative',
    bottom: -18,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    marginVertical: 30,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Medium',
    fontSize: 14,
    color: colors.get('gray-font-light'),
  },
  footerTextHighlight: {
    fontFamily: 'Ubuntu-Bold',
    color: colors.get('green-dark'),
  },
});
