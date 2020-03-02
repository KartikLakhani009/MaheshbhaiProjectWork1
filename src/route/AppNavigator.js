/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

//Stack NAvigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Drawer
import {createDrawerNavigator} from 'react-navigation-drawer';

// import {reanima} from 'react-native-reanimated';
import Drawercomponet from '../Component/Drawer/Drawercomponet';

//Screen
import Registration from '../screen/UserAuth/Registration/RegistrationUser';

const DrawerNavigation1 = createStackNavigator({
  Registration: {screen: Registration},
});

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
    Registration: {screen: Registration},
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
