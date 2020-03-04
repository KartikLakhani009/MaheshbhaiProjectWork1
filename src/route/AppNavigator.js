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
import RegisterCommon from '../screen/UserAuth/Registration/RegisterCommon';
import UserProfile from '../screen/UserAuth/UserProfile/UserProfile';

//Tab Bar
import Header from '../Component/TabHeader/Header';

//Styles
import AppStyle from '../assets/config/Styles';

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
      header: props => <Header {...props} />,
      animationEnabled: true,
    },

    tabBarOptions: {
      style: {
        height: AppStyle.responsiveHeight(7),
        marginTop: AppStyle.responsiveHeight(8),
        backgroundColor: AppStyle.COLOR.Dodger_Blue,
      },
      showIcon: true,
      tabStyle: {
        flexDirection: 'row',
      },
      indicatorStyle: {
        backgroundColor: 'white',
      },
    },
  },
);

// const AutoStack = createStackNavigator(
//   {
//     Login: {screen: Login},
//     RegisterCommon: {screen: RegisterCommon},
//   },
//   {
//     // headerMode: 'none',
//   },
// );

const AuthStack = createStackNavigator({
  // MyDrawerNavigation,
  TabTopNavigation,
  // AutoStack,
  UserProfile: {
    screen: UserProfile,
  },
  // TabTopNavigation
});

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;
