/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { Image } from 'react-native';
//Stack NAvigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Kartik Plan for new
//Drawer
import { createDrawerNavigator } from 'react-navigation-drawer';

//Toptabs
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// import {reanima} from 'react-native-reanimated';
import Drawercomponet from '../Component/Drawer/Drawercomponet';

//Screen
import RegistrationUser_comman from '../screen/UserAuth/Registration/RegistrationUser_comman';
import Login from '../screen/UserAuth/Login/Login';

const DrawerNavigation1 = createStackNavigator({
  RegistrationUser_comman: { screen: RegistrationUser_comman },
});

//Kartik Plan
const MyDrawerNavigation = createDrawerNavigator(
  {
    DrawerNavigator: { screen: DrawerNavigation1 },
  },
  {
    drawerWidth: '50%',
    drawerPosition: 'left',
    drawerType: 'slide',
    contentComponent: () => <Drawercomponet />,
  },
);

const TabTopNavigation = createMaterialTopTabNavigator({

  RegistrationUser_comman: {
    screen: RegistrationUser_comman,
    navigationOptions: {
      title: 'Sign Up',
      tabBarIcon: () => {

      }
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      tabBarIcon: () => {

      }
    }
  },
}, {
  initialRouteName: 'RegistrationUser_comman',
  tabBarOptions: {
    style: {
      height: 50,
      // marginTop: 200
    },
    indicatorStyle: {
      borderBottomColor: 'White',
      borderWidth: 2
    }

  }
})

const AutoStack = createStackNavigator(
  {
    RegistrationUser_comman: { screen: RegistrationUser_comman },
    Login: { screen: Login },
  },
  {
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator(
  {
    // MyDrawerNavigation,
    TabTopNavigation,
    AutoStack,
    // TabTopNavigation

  },
  {
    headerMode: 'none',
  },
);

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;
