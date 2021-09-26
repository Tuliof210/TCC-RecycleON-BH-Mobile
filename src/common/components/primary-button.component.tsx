import React from 'react';

import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from 'common/constants/colors';

export function PrimaryButtonComponent(props: {
  size: { width: number | string; height: number | string };
  label: string;
  handler: () => void;
}): JSX.Element {
  return (
    <TouchableWithoutFeedback onPress={props.handler}>
      <LinearGradient
        style={[styles.container, styles.containerShadow]}
        colors={[gradient('fade-green-btn').start, gradient('fade-green-btn').end]}
        end={{ x: 0.8, y: 0 }}
      >
        <Text style={[{ width: props.size.width, height: props.size.height }, styles.text]}>{props.label}</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  containerShadow: {
    shadowColor: colors('black'),
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
    color: colors('white-font'),
  },
});
