import React, { Fragment } from 'react';
import { LogBox } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from '@use-expo/font';

import LoginScreen from './src/screens/Login.screen';
import SignupScreen from './src/screens/Signup.screen';

export default function App() {
  // habilita a possibilidade de executar com "react-devtools" em ambiente de Dev
  if (__DEV__) require('react-devtools');

  // react sempre avisa como "erro" o fato de estarmos executando com remote debugger
  LogBox.ignoreLogs(['Remote debugger']); // log box permite ignorarmos esse erro

  const Stack = createNativeStackNavigator();

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
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen name="signup" component={SignupScreen} options={{ title: 'Signup' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  ) : (
    <AppLoading></AppLoading>
  );
}
