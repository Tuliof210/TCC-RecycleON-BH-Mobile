import React, { Fragment } from 'react';
import { Alert } from 'react-native';

import SocialButtonComponent from 'components/buttons/social-button.component';

import styles from './login-social.style';

export default (props: {}): JSX.Element => {
  function handleFacebookLogin() {
    Alert.alert('Login Facebook', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }

  function handleGoogleLogin() {
    Alert.alert('Login Google', 'working...', [{ text: 'Cancel' }, { text: 'OK' }]);
  }

  //--------------------------------------------------------------

  return (
    <Fragment>
      <SocialButtonComponent
        size={styles.buttonSize}
        icon={require('assets/images/facebook.png')}
        btnFunction={handleFacebookLogin}
      />
      <SocialButtonComponent
        size={styles.buttonSize}
        icon={require('assets/images/google.png')}
        btnFunction={handleGoogleLogin}
      />
    </Fragment>
  );
};
