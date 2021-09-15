import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/styles';

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <View style={styles.lineBreak}></View>
      <Text style={styles.textLineBreak}>{children}</Text>
      <View style={styles.lineBreak}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  lineBreak: {
    height: 1,
    width: '45%',
    backgroundColor: colors.get('gray-line'),
  },
  textLineBreak: {
    width: '10%',
    textAlign: 'center',
    color: colors.get('gray-font'),
    backgroundColor: colors.get('white'),
    fontSize: 11,
    fontFamily: 'Ubuntu-Regular',
  },
});
