import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { colors } from 'common/constants/colors';

export default (props: { children: React.ReactNode }) => (
  <View style={styles.container}>
    <View style={styles.lineBreak}></View>
    <Text style={styles.label}>{props.children}</Text>
    <View style={styles.lineBreak}></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  label: {
    width: '10%',
    textAlign: 'center',
    color: colors.get('gray-font'),
    backgroundColor: colors.get('white'),
    fontSize: 11,
    fontFamily: 'Ubuntu-Regular',
  },
  lineBreak: {
    height: 1,
    width: '45%',
    backgroundColor: colors.get('gray-line'),
  },
});
