// Main.js
import React from 'react';
import {StyleSheet, Platform, Image, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from './Home';
import Profile from './Profile';

const Main = createBottomTabNavigator({
  One: Home,
  Two: Profile,
});

export default Main;

// export default class Main extends React.Component {
//   state = {currentUser: null};

//   componentDidMount() {
//     const {currentUser} = auth();
//     this.setState({currentUser});
//   }

//   render() {
//     const {currentUser} = this.state;
//     return (
//       <View style={styles.container}>
//         <Text>Hi {currentUser && currentUser.email}!</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
