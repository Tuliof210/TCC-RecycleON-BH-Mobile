import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { colors } from 'common/constants/colors';

export default (props: {
  message?: string;
  position: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}) => (
  <View style={[styles.container, { display: props.message ? 'flex' : 'none', ...props.position }]}>
    <Text style={styles.label}>{props.message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
  },
  label: {
    width: '100%',
    color: colors.get('red'),
    fontSize: 9,
    fontFamily: 'Ubuntu-Medium',
  },
});
