import React, { Fragment } from 'react';
import { Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';

import styles from './profile-card.style';
import { highLightColors } from 'common/constants/colors';

import { SvgXml } from 'react-native-svg';
import { ConfigSVG, StarSVG, LogoutSVG } from 'assets/svgs';

export function ProfileCardComponent(props: { name: string | undefined; email: string | undefined }): JSX.Element {
  const test = () => {
    alert('Pressed!');
  };
  return (
    <Fragment>
      <View style={[styles.container, styles.containerShadow]}>
        <Text style={[styles.label]}>{props.name}</Text>
        <View style={styles.breakLine} />
        <Text style={[styles.label]}>{props.email}</Text>
      </View>

      <View style={[styles.container, styles.containerShadow, styles.containerOptions]}>
        <TouchableWithoutFeedback onPress={test}>
          <View style={styles.menuOption}>
            <SvgXml xml={ConfigSVG.default} width={17} height={17} style={styles.svgIcon} />
            <Text style={styles.menuOptionText}>Alterar Dados</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={test}>
          <View style={styles.menuOption}>
            <SvgXml xml={StarSVG.filled} width={17} height={17} style={styles.svgIcon} />
            <Text style={styles.menuOptionText}>Locais Favoritos</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={test}>
          <View style={[styles.menuOption, { paddingTop: 25 }]}>
            <SvgXml xml={LogoutSVG.default} width={17} height={17} style={styles.svgIcon} />
            <Text style={[styles.menuOptionText, styles.exit]}>Sair</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Fragment>
  );
}
