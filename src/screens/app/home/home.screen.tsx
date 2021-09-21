import React, { useContext } from 'react';
import { Text, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import AuthContext from 'context/auth';

import styles from './home.style';

export default (props: { navigation: NavigationProp<any, any> }): JSX.Element => {
  const { signOut } = useContext(AuthContext);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text onPress={signOut}>Sair</Text>
    </ScrollView>
  );
};
