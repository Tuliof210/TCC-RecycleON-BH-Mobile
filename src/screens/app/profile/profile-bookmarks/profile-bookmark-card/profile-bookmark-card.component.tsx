import React, { Fragment, useContext } from 'react';
import { View, Text, Platform, Linking, TouchableWithoutFeedback } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { LocationPoint } from 'common/constants/types';
import { PrimaryButtonComponent } from 'common/components';

import styles from './profile-bookmark-card.style';

import { SvgXml } from 'react-native-svg';
import { StarSVG } from 'assets/svgs';

export function ProfileBookmarkCard(props: { location: LocationPoint }): JSX.Element {
  const { location } = props;

  const tryRender = (value: any) => value || '-';

  const renderAddress = (): JSX.Element | undefined => {
    const address = location.properties.address;
    if (address) {
      return (
        <Fragment>
          <Text style={styles.text}>
            <Text style={styles.labelText}>Logradouro:{'   '}</Text>
            {tryRender(address.street)}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.labelText}>Número:{'   '}</Text>
            {tryRender(address.number)}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.labelText}>Bairro:{'   '}</Text>
            {tryRender(address.neighborhood)}
          </Text>
        </Fragment>
      );
    }
  };

  const renderMaterials = (): Array<JSX.Element> | undefined =>
    location.properties.materials.map((material, index) => (
      <Text key={`${index}-${material}`} style={styles.itens}>
        {material}
      </Text>
    ));

  const openMapsApp = () => {
    const coordinates = location.geometry.coordinates;
    if (coordinates) {
      const label = 'Custom Label';

      const [lng, lat] = coordinates;
      const latLng = `${lat},${lng}`;

      const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
      const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`,
      });

      if (url) {
        Linking.openURL(url);
      }
    }
  };

  return (
    <View style={[styles.container, styles.containerShadow]}>
      <View>
        {renderAddress()}
        <View style={styles.breakLine}></View>
        <View style={styles.containerBody}>
          <View style={styles.containerSubBody}>{renderMaterials()}</View>
          <View style={styles.containerSubBody}>
            <Text style={styles.subText}>{location.properties.businessHours}</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerFooter}>
        <View>
          <PrimaryButtonComponent size={styles.directionButton} label="Ver no Maps" handler={openMapsApp} />
        </View>
        <TouchableWithoutFeedback onPress={() => console.log('delete')}>
          <SvgXml xml={StarSVG.filled} width={35} height={35} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
