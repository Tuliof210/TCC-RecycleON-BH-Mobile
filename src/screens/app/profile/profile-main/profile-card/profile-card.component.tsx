import React, { Fragment } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './profile-card.style';

export function ProfileCardComponent(props: { name: string | undefined; email: string | undefined }): JSX.Element {
  return (
    <Fragment>
      <View style={[styles.container, styles.containerShadow]}>
        <Image source={require('assets/AppIcons/playstore.png')} style={styles.profilePicture} />
        <View>
          <Text style={[styles.label, styles.labelName]}>{props.name}</Text>
          <Text style={[styles.label, styles.labelPassword]}>{props.email}</Text>
        </View>
      </View>
    </Fragment>
  );
}
