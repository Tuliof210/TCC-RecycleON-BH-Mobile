import React from 'react';

import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../constants/styles';

export default ({
  title,
  size,
  btnFunction,
}: {
  title: string;
  size: { width: number | string; height: number | string };
  btnFunction: () => void;
}) => {
  return (
    <LinearGradient
      style={[styles.btnContainer, styles.containerShadow, { width: size.width, height: size.height }]}
      colors={[gradient.get('fade-btn').start, gradient.get('fade-btn').end]}
      end={{ x: 0.8, y: 0 }}
    >
      <Text style={styles.textStyle} onPress={btnFunction}>
        {title}
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    margin: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 7,
  },
  textStyle: {
    color: colors.get('font-white'),
    fontFamily: 'Ubuntu-Bold',
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
