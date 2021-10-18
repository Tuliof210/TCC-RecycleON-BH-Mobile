import React from 'react';
import { Text, View } from 'react-native';

import styles from './profile-card.style';

export function ProfileCardComponent(props: { name: string | undefined; email: string | undefined }): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={[styles.label]}>{props.name}</Text>
      <View style={styles.breakLine} />
      <Text style={[styles.label]}>{props.email}</Text>
    </View>
  );
}
