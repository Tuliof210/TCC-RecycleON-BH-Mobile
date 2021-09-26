import React from 'react';

import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { LocationProperties } from 'common/constants/types';

import { colors, gradient } from 'common/constants/colors';

export function LocationCardComponent(props: { location: LocationProperties }): JSX.Element {
  const handler = (): void => console.log('teste');

  return (
    <View style={[styles.container, styles.containerShadow]}>
      <Text style={styles.title}>{props.location.name}</Text>
      <View style={styles.breakLine}></View>
      <TouchableWithoutFeedback onPress={handler}>
        <LinearGradient
          style={[styles.button]}
          colors={[gradient('fade-green-btn').start, gradient('fade-green-btn').end]}
          end={{ x: 0.8, y: 0 }}
        >
          <Text style={[styles.buttonLabel]}>Ver mais</Text>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 75,
    justifyContent: 'center',
    backgroundColor: colors('white'),
    borderRadius: 5,
    marginBottom: 10,
  },
  containerShadow: {
    shadowColor: colors('black'),
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  title: {},
  breakLine: {},
  button: {
    width: '100%',
    height: 50,
    margin: 5,
  },
  buttonLabel: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Ubuntu-Medium',
    fontSize: 10,
    color: colors('white-font'),
  },
});
