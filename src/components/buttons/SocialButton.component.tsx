import React from 'react';

import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../../constants/styles';

export default ({
  btnFunction,
  size,
  children,
}: {
  btnFunction: () => void;
  size: { width: number | string; height: number | string };
  children: React.ReactNode;
}) => {
  return (
    <LinearGradient
      style={[styles.btnContainer, styles.containerShadow]}
      colors={[gradient.get('fade-gray-btn').start, gradient.get('fade-gray-btn').end]}
      end={{ x: 0.8, y: 0 }}
    >
      <Text style={[styles.textStyle, { width: size.width, height: size.height }]} onPress={btnFunction}>
        {children}
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

    borderRadius: 10,
  },
  textStyle: {
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Ubuntu-Bold',
    color: colors.get('gray-font-dark'),
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
