import React, { Fragment, useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { AuthContext } from 'context';

import { ProfileCardComponent } from './profile-card/profile-card.component';

import styles from './profile.style';

export default function ProfileScreen(props: { navigation: NavigationProp<any, any> }): JSX.Element {
  const { user, signOut } = useContext(AuthContext);

  return (
    <Fragment>
      <Text style={styles.title}>Perfil</Text>
      <ProfileCardComponent name={user?.name} email={user?.email} />
    </Fragment>
  );
}
