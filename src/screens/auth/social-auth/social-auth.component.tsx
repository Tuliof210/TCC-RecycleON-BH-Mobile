import React, { Fragment } from 'react';
import { Alert, View } from 'react-native';

import { SocialButtonComponent } from './social-button/social-button.component';

import styles from './social-auth.style';

export default function SocialAuthComponent(): JSX.Element {
  function handleFacebookAuth() {
    Alert.alert('Auth With Facebook', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }

  function handleGoogleAuth() {
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
