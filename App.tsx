import React, { Fragment } from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from '@use-expo/font';

import { UbuntuFonts } from 'assets';
import { AuthProvider, LocationProvider } from 'context';
import { Routes } from 'routes';

export default function RecycleON_BH(): JSX.Element {
  // habilita a possibilidade de executar com "react-devtools" em ambiente de Dev
  if (__DEV__) require('react-devtools');

  // react sempre avisa como "erro" o fato de estarmos executando com remote debugger
  LogBox.ignoreLogs(['Remote debugger']); // log box permite ignorarmos esse erro

  // carrega fonts custom para serem usadas no "StyleSheet.create({})"
  const [isLoaded] = useFonts(UbuntuFonts);

  // so carregará o app caso carregue as fonts
  return isLoaded ? (
    <Fragment>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AuthProvider>
          <LocationProvider>
            <Routes />
          </LocationProvider>
        </AuthProvider>
      </NavigationContainer>
    </Fragment>
  ) : (
    <AppLoading></AppLoading>
  );
}
