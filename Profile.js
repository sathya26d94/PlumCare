import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={styles.container}>
        <Text>{'Profile'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
