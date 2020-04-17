import React from 'react';
import {StyleSheet, Platform, Image, Text, View} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Loading from './Loading';
import SignUp from './SignUp';
import Login from './Login';
import Main from './Main';

const App = createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      SignUp,
      Login,
      Main,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);
export default App;
