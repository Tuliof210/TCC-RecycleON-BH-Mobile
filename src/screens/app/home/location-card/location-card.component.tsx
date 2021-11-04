import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { LocationProperties } from 'common/constants/types';

import styles from './location-card.style';

export function LocationCardComponent(props: { locationData: LocationProperties | null }): JSX.Element {
  return <View style={[styles.container, styles.containerShadow, { opacity: !!props.locationData ? 1 : 0.5 }]}></View>;
}
