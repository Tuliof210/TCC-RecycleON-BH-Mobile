import React from 'react';

import { StyleSheet, Image, TouchableHighlight, ImageProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../../constants/styles';

export default ({
  size,
  icon,
  btnFunction,
}: {
  size: { width: number | string; marginVertical: number | string };
  icon: ImageProps;
  btnFunction: () => void;
}) => {
  return (
    <TouchableHighlight onPress={btnFunction} style={{ width: size.width }}>
      <LinearGradient
        style={[styles.btnContainer, styles.btnBorder]}
        colors={[gradient.get('fade-gray-btn').start, gradient.get('fade-gray-btn').end]}
        end={{ x: 0.8, y: 0 }}
      >
        <Image style={[styles.iconSize, { marginVertical: size.marginVertical }]} source={icon} />
      </LinearGradient>
    </TouchableHighlight>
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
    borderWidth: 1,
    borderColor: colors.get('gray-border'),
  },
  iconSize: {
    width: 35,
    height: 35,
  },
});
