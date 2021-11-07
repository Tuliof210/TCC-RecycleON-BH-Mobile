import React, { Fragment, useContext } from 'react';
import { Alert, View } from 'react-native';
import * as Facebook from 'expo-facebook';

import axios from 'axios';
import config from 'config';

import { FacebookProfileData } from 'common/constants/types';

import { AuthContext } from 'context';
import { SocialButtonComponent } from './social-button/social-button.component';

import styles from './social-auth.style';

export default function SocialAuthComponent(): JSX.Element {
  const { facebookAuth } = useContext(AuthContext);

  async function handleFacebookAuth() {
    try {
      await Facebook.initializeAsync({ appId: config.FACEBOOK_ID });
      const connection = await Facebook.logInWithReadPermissionsAsync({ permissions: ['public_profile', 'email'] });

      if (connection.type === 'success') {
        const { token } = connection;
        const facebookURL = 'https://graph.facebook.com/me';
        const fields = 'name,email';

        const fbProfileData = await axios
          .get(`${facebookURL}?fields=${fields}&access_token=${token}`)
          .then((response) => response.data as FacebookProfileData);

        await facebookAuth(fbProfileData);

        console.log(fbProfileData);
      }
    } catch (error: any) {
      console.log(`${error.name}: ${error.message}`);
      alert(`Erro ao tentar entrar com Facebook`);
    }
  }

  async function handleGoogleAuth() {
    Alert.alert('Auth With Google', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }

  return (
    <Fragment>
      <View style={styles.socialAuthButtons}>
        <SocialButtonComponent
          size={styles.socialAuthButtonSize}
          icon={require('assets/images/facebook.png')}
          handler={handleFacebookAuth}
        />
        <SocialButtonComponent
          size={styles.socialAuthButtonSize}
          icon={require('assets/images/google.png')}
          handler={handleGoogleAuth}
        />
      </View>
    </Fragment>
  );
}
