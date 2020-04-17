import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
export default class Profile extends React.Component {
  state = {currentUser: null};

  componentDidMount() {
    const {currentUser} = auth();
    this.setState({currentUser});
  }

  handleLogout = () => {
    auth().signOut();
  };

  render() {
    const {currentUser} = this.state;
    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
        <Button title="Logout" onPress={this.handleLogout} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
