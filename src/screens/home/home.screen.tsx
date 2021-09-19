import React from 'react';
import { Text, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import styles from './home.style';

export default class HomeScreen extends React.Component {
  state: {};
  router: NavigationProp<any, any>;

  constructor(readonly props: { navigation: NavigationProp<any, any> }) {
    super(props);

    this.state = {};
    this.router = this.props.navigation;
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Home</Text>
      </ScrollView>
    );
  }
}
