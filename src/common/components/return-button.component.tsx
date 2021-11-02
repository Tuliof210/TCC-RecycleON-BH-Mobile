import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import { SvgXml } from 'react-native-svg';
import { ArrowBackSVG } from 'assets/svgs';

import { colors } from 'common/constants/colors';

export function ReturnButtonComponent(props: {
  navigation: NavigationProp<any, any>;
  children: React.ReactNode;
}): JSX.Element {
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={goBack}>
      <View style={styles.container}>
        <SvgXml xml={ArrowBackSVG.default} width={25} height={25} />
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 30,
    left: 20,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    color: colors('green-dark'),
    marginHorizontal: 10,
  },
});
