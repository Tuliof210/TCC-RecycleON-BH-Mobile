import React from 'react';

import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradient } from '../constants/styles';

export default ({ title, btnFunction }: { title: string; btnFunction: () => void }) => {
  return (
    <LinearGradient
      style={styles.btnContainer}
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
    width: '100%',
    height: '8%',
    borderRadius: 7,
  },
  textStyle: {
    color: colors.get('font-white'),
    fontFamily: 'Ubuntu-Bold',
  },
});
