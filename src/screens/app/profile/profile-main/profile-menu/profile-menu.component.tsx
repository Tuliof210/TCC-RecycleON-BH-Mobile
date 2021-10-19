import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import styles from './profile-menu.style';

import { SvgXml } from 'react-native-svg';
import { ConfigSVG, StarSVG, LogoutSVG } from 'assets/svgs';

export function ProfileMenuComponent(props: {
  signOut: () => Promise<void>;
  navigatorHandler: (route: string) => void;
}): JSX.Element {
  const navigateToProfileUpdateScreen = () => {
    props.navigatorHandler('profileUpdate');
  };

  return (
    <View style={[styles.container, styles.containerShadow]}>
      <TouchableWithoutFeedback onPress={navigateToProfileUpdateScreen}>
        <View style={[styles.menuOption, styles.bottomBorder]}>
          <SvgXml xml={ConfigSVG.default} width={20} height={20} style={styles.svgIcon} />
          <Text style={styles.menuOptionText}>Alterar Dados</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={navigateToProfileUpdateScreen}>
        <View style={[styles.menuOption, styles.bottomBorder]}>
          <SvgXml xml={StarSVG.filled} width={20} height={20} style={styles.svgIcon} />
          <Text style={styles.menuOptionText}>Locais Favoritos</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={props.signOut}>
        <View style={styles.menuOption}>
          <SvgXml xml={LogoutSVG.default} width={20} height={20} style={styles.svgIcon} />
          <Text style={[styles.menuOptionText, styles.exit]}>Sair</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
