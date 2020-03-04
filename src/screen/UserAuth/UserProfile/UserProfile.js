import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../UserProfile/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FAB } from 'react-native-paper';
import { GoogleSignin } from 'react-native-google-signin';
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton,
} from 'react-native-popup-dialog';

export default class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  Logout = () => {

    // GoogleSignin.signOut()
    // this.props.navigation.navigate('Login')
    < Dialog
      dialogTitle={< DialogTitle title="Are You Sure??" />}
      visible={this.state.visible}
      footer={
        < DialogFooter >
          <DialogButton
            text="CANCEL"
            onPress={() => {
              this.setState({ visible: false });
            }}
          />
          <DialogButton text="Yes" onPress={() => {
            GoogleSignin.signOut()
            this.props.navigation.navigate('Login')
          }} />
        </DialogFooter>
      }>
    </Dialog >

  }

  ButtonAction = () => {
    this.setState({ visible: true });
    this.Logout()
  }

  render() {
    console.log(this.props);
    const { userInfo } = this.props.navigation.state.params;

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
          <Text style={styles.nameStyle}>{userInfo.name}</Text>
          <Text style={styles.emailStyle}>{userInfo.email}</Text>
        </View>

        <View style={styles.btnMainContainer}>
          {/* <TouchableOpacity style={styles.btnStyle}>
            <Icon name="power-off" size={70} style={styles.iconStyle} />
          </TouchableOpacity> */}

          <FAB
            style={styles.FAB}
            icon="power"
            color={'white'}
            // loading={true}
            label={'Log out'}
            theme={{ colors: { accent: 'red' } }}
            // accessibilityLabel={'sunil'}
            onPress={this.ButtonAction}
          />
        </View>

      </View >
    );
  }
}
