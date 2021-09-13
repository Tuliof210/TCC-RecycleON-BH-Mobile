import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '../constants/styles';

const ContainerInput = ({
  height,
  children,
}: {
  height: string;
  children: React.ReactNode;
}) => {
  return (
    <View style={{ ...styles.container, height: height }}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.get('white'),
    justifyContent: 'center',
    position: 'relative',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
  },
});

export default ContainerInput;
