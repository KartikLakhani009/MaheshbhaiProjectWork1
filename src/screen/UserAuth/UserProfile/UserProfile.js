import React, {Component} from 'react';
import {View, Text, Image, BackHandler} from 'react-native';
import {} from 'react-navigation';
import styles from '../UserProfile/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../Component/TabHeader/Header';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  // static navigationOptions = {
  //   title: 'Home',
  // };

  static navigationOptions = ({navigation}) => {
    return {
      //Heading/title of the header
      title: navigation.getParam('Title', 'Left Right Custom Header'),

      //Heading style
    };
  };

  // static navigationOptions = ({navigator}) => {
  //   return {
  //     headerTitle: () => <Header />,
  //     headerRight: () => (
  //       <Button
  //         onPress={navigation.getParam('increaseCount')}
  //         title="+1"
  //         color="#fff"
  //       />
  //     ),
  //   };
  // };

  demo = () => {
    BackHandler.exitApp();
  };

  componentDidMount() {
    // const {pop} = this.props.navigation.actions;
    // // goBack = () => this.demo;
    // pop = () => this.demo;
    // BackHandler = () => this.demo;
  }

  render() {
    console.log('USer Profile > This ', this);
    console.log(
      'USer Profile > This.props.navigation :',
      this.props.navigation,
    );
    const {userInfo} = this.props.navigation.state.params;

    return (
      <View style={styles.MainContainer}>
        <View style={styles.ProfileBackground}>
          <Image
            source={{
              uri: userInfo.photo
                ? userInfo.photo
                : 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg',
            }}
            style={styles.ImageStyle}></Image>
          <Text style={styles.nameStyle}>
            {userInfo.name ? userInfo.name : 'Name'}
          </Text>
          <Text style={styles.emailStyle}>
            {userInfo.email ? userInfo.email : 'email'}
          </Text>
        </View>
        <View style={styles.btnMainContainer}>
          <TouchableOpacity style={styles.btnStyle}>
            <Icon name="logout" size={70} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
