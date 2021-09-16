import React from 'react';

import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from 'styles/colors';

export default (props: {
  btnFunction: () => void;
  size: { width: number | string; height: number | string };
  label: string;
}) => (
  <TouchableWithoutFeedback onPress={props.btnFunction}>
    <LinearGradient
      style={[styles.container, styles.containerShadow]}
      colors={[gradient.get('fade-green-btn').start, gradient.get('fade-green-btn').end]}
      end={{ x: 0.8, y: 0 }}
    >
      <Text style={[{ width: props.size.width, height: props.size.height }, styles.text]}>{props.label}</Text>
    </LinearGradient>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  containerShadow: {
    shadowColor: colors.get('black'),
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 17,
    color: colors.get('white-font'),
  },
});
