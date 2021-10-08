import React, { Fragment, useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { AuthContext } from 'context';

import styles from './profile.style';

export default function ProfileScreen(props: { navigation: NavigationProp<any, any> }): JSX.Element {
  const { user, signOut } = useContext(AuthContext);

  const printUser = (): JSX.Element | void => {
    if (user) {
      return <Text style={[{ color: '#606', fontSize: 20 }]}>{`${user.name} - ${user.email}`}</Text>;
    }
  };

  return (
    <Fragment>
      <View style={styles.topContainer}>
        <View style={styles.profilePictureContainer}>
          <Image style={styles.profilePicture} source={require('assets/images/profile-icon.png')} />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{ marginTop: 100, marginHorizontal: 30 }}>
          <Text style={styles.profileScreenItens}>{user?.name ?? 'Carregando'}</Text>
          <Text style={styles.profileScreenItens}>{user?.email ?? 'Carregando'}</Text>
          <Text
            style={[styles.profileScreenItens, { color: '#f11', fontFamily: 'Ubuntu-Bold', fontSize: 17 }]}
            onPress={signOut}
          >
            Sair
          </Text>
        </View>
      </View>
    </Fragment>
  );
}
