import React from 'react';

import { StyleSheet, Image, TouchableWithoutFeedback, ImageProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../../constants/styles';

export default (props: {
  size: { width: number | string; height: number | string };
  icon: ImageProps;
  btnFunction: () => void;
}) => (
  <TouchableWithoutFeedback onPress={props.btnFunction}>
    <LinearGradient
      style={[styles.container, styles.containerBorder, { width: props.size.width, height: props.size.height }]}
      colors={[gradient.get('fade-gray-btn').start, gradient.get('fade-gray-btn').end]}
      end={{ x: 0.8, y: 0 }}
    >
      <Image style={styles.icon} source={props.icon} />
    </LinearGradient>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBorder: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.get('gray-border'),
  },
  icon: {
    width: 35,
    height: 35,
  },
});
