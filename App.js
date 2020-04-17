import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Loading from './Components/Loading';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Main from './Components/Main';

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
