import React, { Fragment, useContext } from 'react';
import { Alert, View } from 'react-native';

import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

import axios from 'axios';
import config from 'config';

import { SocialProfileData } from 'common/constants/types';

import { AuthContext } from 'context';
import { SocialButtonComponent } from './social-button/social-button.component';

import styles from './social-auth.style';

export default function SocialAuthComponent(): JSX.Element {
  const { socialAuth } = useContext(AuthContext);

  async function handleFacebookAuth() {
    try {
      await Facebook.initializeAsync({ appId: config.FACEBOOK_ID });
      const facebookConnection = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });

      if (facebookConnection.type === 'success') {
        const { token } = facebookConnection;
        const facebookURL = 'https://graph.facebook.com/me';
        const fields = 'name,email';

        const fbProfileData = await axios
          .get(`${facebookURL}?fields=${fields}&access_token=${token}`)
          .then((response) => response.data as SocialProfileData);

        await socialAuth(fbProfileData, 'facebook');
      }
    } catch (error: any) {
      handleSocialAuthError(error, 'Facebook');
    }
  }

  async function handleGoogleAuth() {
    try {
      const googleConnection = await Google.logInAsync({
        iosClientId: config.GOOGLE_CLIENT_ID.IOS,
        androidClientId: config.GOOGLE_CLIENT_ID.ANDROID,
        scopes: ['profile', 'email'],
      });

      if (googleConnection.type === 'success') {
        const { id, name, email } = googleConnection.user;
        if (id && name && email) await socialAuth({ id, name, email }, 'google');
      }
    } catch (error: any) {
      handleSocialAuthError(error, 'Google');
    }
  }

  const handleSocialAuthError = (error: any, brand: string) => {
    const message: string = error.message;
    const errorMessage = message.includes('code 409')
      ? 'Já existe uma conta cadastrada com esse e-mail'
      : `Não foi possível autenticar com ${brand}`;

    Alert.alert(`Erro ao autenticar`, errorMessage);
  };

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
