import React, { Fragment } from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { useFonts } from '@use-expo/font';

import Routes from './src/routes';

import { AuthProvider } from 'context/auth';

export default function App() {
  // habilita a possibilidade de executar com "react-devtools" em ambiente de Dev
  if (__DEV__) require('react-devtools');

  // react sempre avisa como "erro" o fato de estarmos executando com remote debugger
  LogBox.ignoreLogs(['Remote debugger']); // log box permite ignorarmos esse erro

  // carrega fonts custom para serem usadas no "StyleSheet.create({})"
  const [isLoaded] = useFonts({
    'Ubuntu-Bold': require('./src/assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-BoldItalic': require('./src/assets/fonts/Ubuntu-BoldItalic.ttf'),
    'Ubuntu-Italic': require('./src/assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Light': require('./src/assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu-LightItalic': require('./src/assets/fonts/Ubuntu-LightItalic.ttf'),
    'Ubuntu-Medium': require('./src/assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-MediumItalic': require('./src/assets/fonts/Ubuntu-MediumItalic.ttf'),
    'Ubuntu-Regular': require('./src/assets/fonts/Ubuntu-Regular.ttf'),
  });

  // so carregará o app caso carregue as fonts
  return isLoaded ? (
    <Fragment>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </Fragment>
  ) : (
    <AppLoading></AppLoading>
  );
}

//TODO pesquisar diferenças entre login-logon signup-signin
