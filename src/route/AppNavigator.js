/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

//Stack NAvigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Kartik Plan for new
//Drawer
import {createDrawerNavigator} from 'react-navigation-drawer';

// import {reanima} from 'react-native-reanimated';
import Drawercomponet from '../Component/Drawer/Drawercomponet';

//Screen
import RegistrationCommon from '../screen/UserAuth/Registration/RegistrationUser_comman';

const DrawerNavigation1 = createStackNavigator({
  RegistrationCommon: {screen: RegistrationCommon},
});

//Kartik Plan
const MyDrawerNavigation = createDrawerNavigator(
  {
    DrawerNavigator: {screen: DrawerNavigation1},
  },
  {
    drawerWidth: '50%',
    drawerPosition: 'left',
    drawerType: 'slide',
    contentComponent: () => <Drawercomponet />,
  },
);

const AutoStack = createStackNavigator(
  {
    RegistrationCommon: {screen: RegistrationCommon},
  },
  {
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator(
  {
    MyDrawerNavigation,
    AutoStack,
  },
  {
    headerMode: 'none',
  },
);

const AppNavigator = createAppContainer(AutoStack);

export default AppNavigator;
