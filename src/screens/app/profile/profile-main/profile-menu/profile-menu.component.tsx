import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import styles from './profile-menu.style';

import { SvgXml } from 'react-native-svg';
import { ConfigSVG, StarSVG, LogoutSVG } from 'assets/svgs';

export function ProfileMenuComponent(props: {
  signOut: () => Promise<void>;
  navigatorHandler: (route: string) => void;
}): JSX.Element {
  const navigateToScreen = (route: string) => () => {
    props.navigatorHandler(route);
  };

  return (
    <View style={[styles.container, styles.containerShadow]}>
      <TouchableWithoutFeedback onPress={navigateToScreen('profileUpdate')}>
        <View style={[styles.menuOption, styles.bottomBorder]}>
          <SvgXml xml={ConfigSVG.default} width={20} height={20} style={styles.svgIcon} />
          <Text style={styles.menuOptionText}>Alterar Dados</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={navigateToScreen('profileBookmarks')}>
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
