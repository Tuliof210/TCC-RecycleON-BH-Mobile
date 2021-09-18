import React from 'react';
import { Text, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

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
      <ScrollView>
        <Text>Home</Text>
      </ScrollView>
    );
  }
}
