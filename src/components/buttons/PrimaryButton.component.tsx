import React from 'react';

import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
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
    <TouchableWithoutFeedback onPress={btnFunction}>
      <LinearGradient
        style={[styles.btnContainer, styles.containerShadow]}
        colors={[gradient.get('fade-green-btn').start, gradient.get('fade-green-btn').end]}
        end={{ x: 0.8, y: 0 }}
      >
        <Text style={[{ width: size.width, height: size.height }, styles.textStyle]}>{children}</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  textStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 17,
    color: colors.get('white-font'),
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
