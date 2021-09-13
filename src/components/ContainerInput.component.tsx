import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '../constants/styles';

export default ({ height, children }: { height: string; children: React.ReactNode }) => {
  return <View style={{ ...styles.container, ...styles.containerShadow, height: height }}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.get('white'),
  },
  containerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
