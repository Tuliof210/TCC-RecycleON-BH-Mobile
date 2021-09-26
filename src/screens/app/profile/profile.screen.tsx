import React, { Fragment, useContext } from 'react';
import { Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { AuthContext } from 'context';

import styles from './profile.style';

export default function ProfileScreen(props: { navigation: NavigationProp<any, any> }): JSX.Element {
  const { user, signOut } = useContext(AuthContext);

  const printUser = (): JSX.Element | void => {
    if (user)
      return <Text style={[styles.test, { color: '#606', fontSize: 20 }]}>{`${user.name} - ${user.email}`}</Text>;
  };

  return (
    <Fragment>
      <Text style={styles.test}>ProfileScreen</Text>
      {printUser()}
      <Text onPress={signOut} style={styles.test}>
        Sair
      </Text>
    </Fragment>
  );
}
