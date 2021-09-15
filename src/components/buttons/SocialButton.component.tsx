import React from 'react';

import { StyleSheet, Image, TouchableWithoutFeedback, ImageProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../../constants/styles';

export default ({
  size,
  icon,
  btnFunction,
}: {
  size: { width: number | string; height: number | string };
  icon: ImageProps;
  btnFunction: () => void;
}) => {
  return (
    <TouchableWithoutFeedback onPress={btnFunction}>
      <LinearGradient
        style={[styles.btnContainer, styles.btnBorder, { width: size.width, height: size.height }]}
        colors={[gradient.get('fade-gray-btn').start, gradient.get('fade-gray-btn').end]}
        end={{ x: 0.8, y: 0 }}
      >
        <Image style={styles.iconSize} source={icon} />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    margin: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBorder: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.get('gray-border'),
  },
  iconSize: {
    width: 35,
    height: 35,
  },
});
