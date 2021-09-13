import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { gradient } from '../constants/styles';

import ContainerInput from '../components/ContainerInput.component';
import PrimaryButton from '../components/PrimaryButton.component';

export default () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[gradient.get('fade-bg').start, gradient.get('fade-bg').end]}
      end={{ x: 0, y: 0.3 }}
    >
      <Image style={styles.art} source={require('../assets/images/login-art.png')} />
      <ContainerInput height="70%">
        <PrimaryButton title={'Entrar'} btnFunction={teste} />
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

//--------------------------------------------------------------------------------------------
function teste() {
  console.warn('teste');
}
