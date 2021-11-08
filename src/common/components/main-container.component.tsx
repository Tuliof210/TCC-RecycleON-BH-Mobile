import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'common/constants/colors';

export function MainContainerComponent(props: { height: string | number; children: React.ReactNode }): JSX.Element {
  return <View style={[styles.container, styles.containerShadow, { height: props.height }]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 55,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
    bottom: 0,
    backgroundColor: colors('white'),
  },
  containerShadow: {
    shadowColor: colors('black'),
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
