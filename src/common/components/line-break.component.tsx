import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { colors } from 'common/constants/colors';

export default function LineBreakComponent(props: { children: React.ReactNode }): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.lineBreak}></View>
      <Text style={styles.label}>{props.children}</Text>
      <View style={styles.lineBreak}></View>
    </View>
  );
}

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
    color: colors('gray-font'),
    backgroundColor: colors('white'),
    fontSize: 11,
    fontFamily: 'Ubuntu-Regular',
  },
  lineBreak: {
    height: 1,
    width: '45%',
    backgroundColor: colors('gray-line'),
  },
});
