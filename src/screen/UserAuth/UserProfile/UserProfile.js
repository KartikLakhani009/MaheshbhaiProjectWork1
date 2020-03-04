import React, {Component} from 'react';
import {View, Text, Image, BackHandler, AsyncStorage} from 'react-native';
import styles from '../UserProfile/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {FAB} from 'react-native-paper';
import {GoogleSignin} from 'react-native-google-signin';
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton,
} from 'react-native-popup-dialog';

//component
import Header from '../../../Component/UserProfileCustomHeader/Header';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      stroe: false,
    };
  }

  Logout = () => {
    this.setState({visible: true});
  };

  ButtonAction = () => {
    this.setState({visible: true});
    this.Logout();
  };

  static navigationOptions = {
    title: 'sunil',
    header: <Header {...this.props} />,
  };

  demo = () => {
    BackHandler.exitApp();
  };

  componentDidMount() {
    const {userInfo} = this.props.navigation.state.params;

    if (this.state.stroe === false) {
      AsyncStorage.setItem('User', JSON.stringify(userInfo));
      this.setState({stroe: true});
    }
  }

  render() {
    console.log('USer Profile > This ', this);
    console.log(
      'USer Profile > This.props.navigation :',
      this.props.navigation,
    );
    const {userInfo} = this.props.navigation.state.params;

    //warning
    let user;
    try {
      user = JSON.parse(AsyncStorage.getItem('USer'));

      if (user == null) {
        user = userInfo;
      }
    } catch (error) {
      console.log('Error', error);
      user = userInfo;
    }

    return (
      <View style={styles.MainContainer}>
        <View style={styles.ProfileBackground}>
          <Image
            source={{
              uri: user.photo
                ? user.photo
                : 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg',
            }}
            style={styles.ImageStyle}></Image>
          <Text style={styles.nameStyle}>{user.name ? user.name : 'Name'}</Text>
          <Text style={styles.emailStyle}>
            {user.email ? user.email : 'email'}
          </Text>
        </View>
        <Dialog
          dialogTitle={<DialogTitle title="Are You Sure??" />}
          visible={this.state.visible}
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                onPress={() => {
                  this.setState({visible: false});
                }}
              />
              <DialogButton
                text="Yes"
                onPress={() => {
                  this.props.navigation.navigate('Login');
                }}
              />
            </DialogFooter>
          }></Dialog>
        <View style={styles.btnMainContainer}>
          {/* <TouchableOpacity style={styles.btnStyle} onPress={this.ButtonAction}>
            <Icon name="power-off" size={70} style={styles.iconStyle} />
          </TouchableOpacity> */}

          <FAB
            style={styles.FAB}
            icon="power"
            color={'white'}
            // loading={true}
            label={'Log out'}
            theme={{colors: {accent: 'red'}}}
            onPress={this.ButtonAction}
          />
        </View>
      </View>
    );
  }
}
