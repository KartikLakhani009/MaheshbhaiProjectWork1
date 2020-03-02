/* eslint-disable prettier/prettier */
//Libary
import React, {Component} from 'react';
import LoginIcon from 'react-native-vector-icons/AntDesign';
//Stack NAvigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Kartik Plan for new
//Drawer
import {createDrawerNavigator} from 'react-navigation-drawer';

//Toptabs
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

// import {reanima} from 'react-native-reanimated';
import Drawercomponet from '../Component/Drawer/Drawercomponet';

//Screen
import Login from '../screen/UserAuth/Login/Login';
import RegisterCommon from '../screen/UserAuth/Registration/Register_common';

//Tab Bar
import Header from '../Component/TabHeader/Header';
import CustomHeader from '../Component/CustomHeaderFromNet/CustomHeader';

const DrawerNavigation1 = createStackNavigator({
  Login: {screen: Login},
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

const TabTopNavigation = createMaterialTopTabNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
        tabBarIcon: () => {
          return <LoginIcon name="user" color="#fff" size={20} />;
        },
      },
    },
    RegisterCommon: {
      screen: RegisterCommon,
      navigationOptions: {
        title: 'Register',
        tabBarIcon: () => <LoginIcon name="adduser" color="#fff" size={20} />,
      },
    },
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      // tabBarLabel: 'Home!',
      header: props => <Header {...props} />,
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
      headerTintColor: '#fff',
      animationEnabled: true,
    },

    tabBarOptions: {
      style: {
        height: 50,
        // marginTop: 200
      },
      indicatorStyle: {
        borderBottomColor: 'White',
        borderWidth: 2,
      },
    },
  },
);

const AutoStack = createStackNavigator(
  {
    Login: {screen: Login},
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
