import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { gradient } from '../constants/styles';

import ContainerInput from '../components/layouts/ContainerInput.component';
import PrimaryButton from '../components/buttons/PrimaryButton.component';
import LineBreakComponent from '../components/common/LineBreak.component';

export default () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[gradient.get('fade-bg').start, gradient.get('fade-bg').end]}
      end={{ x: 0, y: 0.3 }}
    >
      <Image style={styles.art} source={require('../assets/images/login-art.png')} />
      <ContainerInput height="70%">
        <PrimaryButton size={{ width: '100%', height: 50 }} btnFunction={() => console.log('oi')}>
          Entrar
        </PrimaryButton>
        <LineBreakComponent>Ou</LineBreakComponent>
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
  art: {
    width: 200,
    height: 200,
    position: 'relative',
    bottom: -18,
  },
});
