import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { gradient } from '../constants/styles';

import ContainerInput from '../components/layouts/ContainerInput.component';
import PrimaryButton from '../components/buttons/PrimaryButton.component';
import SocialButton from '../components/buttons/SocialButton.component';
import LineBreak from '../components/common/LineBreak.component';

export default () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[gradient.get('fade-green-bg').start, gradient.get('fade-green-bg').end]}
      end={{ x: 0, y: 0.3 }}
    >
      <Image style={styles.art} source={require('../assets/images/login-art.png')} />
      <ContainerInput height="70%">
        <PrimaryButton size={{ width: '100%', height: 50 }} btnFunction={() => console.log('primary')}>
          Entrar
        </PrimaryButton>
        <LineBreak>Ou</LineBreak>
        <View style={styles.socialLogin}>
          <SocialButton
            icon={require('../assets/images/facebook.png')}
            size={{ width: '43%', height: 60 }}
            btnFunction={() => console.log('facebook')}
          />
          <SocialButton
            icon={require('../assets/images/facebook.png')}
            size={{ width: '43%', height: 60 }}
            btnFunction={() => console.log('google')}
          />
        </View>
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
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
