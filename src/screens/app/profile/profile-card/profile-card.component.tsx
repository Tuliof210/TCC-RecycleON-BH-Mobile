import React, { Fragment } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import styles from './profile-card.style';
import { highLightColors } from 'common/constants/colors';

export function ProfileCardComponent(props: { name: string | undefined; email: string | undefined }): JSX.Element {
  const test = () => {
    alert('Pressed!');
  };
  return (
    <Fragment>
      <View style={[styles.container, styles.containerShadow]}>
        <Text style={[styles.label]}>{props.name}</Text>
        <View style={styles.breakLine} />
        <Text style={[styles.label]}>{props.email}</Text>
      </View>

      <View style={[styles.container, styles.containerShadow, styles.containerOptions]}>
        <TouchableHighlight activeOpacity={1} underlayColor={highLightColors('green-light')} onPress={test}>
          <Text style={styles.menuOption}>Alterar Dados</Text>
        </TouchableHighlight>

        <TouchableHighlight activeOpacity={1} underlayColor={highLightColors('green-light')} onPress={test}>
          <Text style={styles.menuOption}>Locais Favoritos</Text>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={1}
          underlayColor={highLightColors('red')}
          onPress={test}
          style={{ zIndex: -11 }}
        >
          <Text style={[styles.menuOption, styles.exit]}>Sair</Text>
        </TouchableHighlight>
      </View>
    </Fragment>
  );
}
