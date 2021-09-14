import React from 'react';

import { StyleSheet, Image, TouchableHighlight, ImageProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../../constants/styles';

export default ({
  icon,
  btnFunction,
  size,
}: {
  icon: ImageProps;
  btnFunction: () => void;
  size: { width: number | string; height: number | string };
}) => {
  return (
    <TouchableHighlight onPress={btnFunction}>
      <LinearGradient
        style={[styles.btnContainer, styles.containerShadow]}
        colors={[gradient.get('fade-gray-btn').start, gradient.get('fade-gray-btn').end]}
        end={{ x: 0.8, y: 0 }}
      >
        <Image style={{ width: size.width, height: size.height }} source={icon} />
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

    borderRadius: 10,
  },
  containerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
