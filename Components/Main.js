// Main.js
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from './Home';
import Profile from '../Profile';

const Main = createBottomTabNavigator({
  Home: Home,
  Profile: Profile,
});

export default Main;
