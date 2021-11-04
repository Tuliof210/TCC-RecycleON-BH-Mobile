import React from 'react';
import { View } from 'react-native';

import styles from './location-card.style';

export function LocationCardComponent(props: { visible: boolean }): JSX.Element {
  return <View style={[styles.container, styles.containerShadow, { opacity: props.visible ? 1 : 0.5 }]}></View>;
}
