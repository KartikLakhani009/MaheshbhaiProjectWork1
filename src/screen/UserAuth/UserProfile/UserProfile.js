import React, {Component} from 'react';
import {View, Text, Image, AsyncStorage} from 'react-native';
import styles from '../UserProfile/styles';

import {FAB} from 'react-native-paper';
import {GoogleSignin} from 'react-native-google-signin';
import Dialog, {
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

  static navigationOptions = {
    // title: 'sunil',
    header: <Header {...this.props} />,
  };

  async componentDidMount() {
    const {userInfo} = this.props.navigation.state.params;

    if (this.state.stroe === false) {
      console.log('Stringyfy : ', JSON.stringify(userInfo));
      console.log('User : ', userInfo);
      await AsyncStorage.setItem('User', JSON.stringify(userInfo))
        .then(res => console.log('stringy res : ', res))
        .catch(err => console.log('error :', err));
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

    console.log('USerInfo : ', userInfo);

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
                  GoogleSignin.revokeAccess();
                  GoogleSignin.signOut();
                  AsyncStorage.clear();
                  this.props.navigation.navigate('Login');
                  this.setState({visible: false});
                }}
              />
            </DialogFooter>
          }></Dialog>
        <View style={styles.btnMainContainer}>
          <FAB
            style={styles.FAB}
            icon="power"
            color={'white'}
            // loading={true}
            label={'Log out'}
            theme={{colors: {accent: 'red'}}}
            onPress={this.Logout}
          />
        </View>
      </View>
    );
  }
}
