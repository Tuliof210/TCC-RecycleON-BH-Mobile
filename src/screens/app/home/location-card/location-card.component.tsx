import React, { forwardRef, Fragment, useImperativeHandle, useState, useContext, useEffect } from 'react';
import { Animated, View, Text, TouchableWithoutFeedback, Platform, Linking } from 'react-native';

import { UserContext } from 'context';

import { LocationPoint } from 'common/constants/types';
import { PrimaryButtonComponent } from 'common/components';

import styles from './location-card.style';

import { SvgXml } from 'react-native-svg';
import { SearchSVG, StarSVG } from 'assets/svgs';

interface IlocationCardProps {}
export interface ILocationCardRef {
  setLocationRef(locationPoint: LocationPoint): void;
  clearLocationRef(): void;
}

export const LocationCardComponent = forwardRef<ILocationCardRef, IlocationCardProps>((props, ref): JSX.Element => {
  const { user, updateUser } = useContext(UserContext);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [fadeAnimation] = useState(new Animated.Value(0));
  const [display, setDisplay] = useState<'none' | 'flex'>('none');
  const [location, setLocation] = useState<LocationPoint | null>(null);

  const animationDuration = 200;

  function fadeIn(): void {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();

    updateDisplay('flex');
  }

  function fadeOut(): void {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();

    updateDisplay('none');
  }

  function updateDisplay(value: 'flex' | 'none') {
    setTimeout(() => {
      setDisplay(value);
    }, animationDuration);
  }

  useImperativeHandle(ref, () => ({
    setLocationRef(locationPoint: LocationPoint) {
      fadeIn();
      setLocation(locationPoint);
    },
    clearLocationRef() {
      fadeOut();
      setLocation(null);
    },
  }));

  useEffect(() => {
    console.log(user);
    if (user?.bookmarks) {
      const favorite = user.bookmarks.some((bookmark) => bookmark === location?._id);
      setIsFavorite(favorite);
    }
  }, [location]);

  //---------------------------------------------------------------------------------------------------------------------

  const updateBookmarks = async (addBookmark: boolean): Promise<void> => {
    const locationID = location?._id;
    const currentBookmarks = user?.bookmarks || [];

    if (locationID) {
      const bookmarksList = addBookmark
        ? [...currentBookmarks, locationID]
        : currentBookmarks.filter((bookmark) => bookmark !== locationID);

      const updatedBookmarks = new Set(bookmarksList);
      await updateUser({ bookmarks: Array.from(updatedBookmarks) });
    }
  };

  const toggleFavorite = (): void => {
    setIsFavorite((current) => {
      const newCurrent = !current;
      updateBookmarks(newCurrent);
      return newCurrent;
    });
  };

  const tryRender = (value: any) => value || '-';

  const renderAddress = (): JSX.Element | undefined => {
    const address = location?.properties.address;
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
    location?.properties.materials.map((material, index) => (
      <Text key={`${index}-${material}`} style={styles.itens}>
        {material}
      </Text>
    ));

  const teste = () => {
    const coordinates = location?.geometry.coordinates;
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
    <Animated.View
      style={[
        styles.container,
        styles.containerShadow,
        {
          opacity: fadeAnimation,
          display: display,
        },
      ]}
    >
      <View>
        {renderAddress()}
        <View style={styles.breakLine}></View>
        <View style={styles.containerBody}>
          <View style={styles.containerSubBody}>{renderMaterials()}</View>
          <View style={styles.containerSubBody}>
            <Text style={styles.subText}>{location?.properties.businessHours}</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerFooter}>
        <View>
          <PrimaryButtonComponent size={styles.submitButton} label="Ver no Maps" handler={teste} />
        </View>
        <TouchableWithoutFeedback onPress={toggleFavorite}>
          <SvgXml xml={isFavorite ? StarSVG.filled : StarSVG.empty} width={35} height={35} />
        </TouchableWithoutFeedback>
      </View>
    </Animated.View>
  );
});
