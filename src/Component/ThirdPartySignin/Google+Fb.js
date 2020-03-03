import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GOOGLEICON from 'react-native-vector-icons/AntDesign';
import AppStyle from '../../assets/config/Styles';
import {GoogleSignin, statusCodes} from 'react-native-google-signin';
import conf from '../../assets/config/Googleconfig';

class FBWithGSignin extends Component {
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Login Complete', userInfo);
      return this.props.navigation.navigate('UserProfile', {
        userInfo: userInfo.user,
      });
      // this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  componentDidMount() {
    GoogleSignin.configure(conf);
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.btn, styles.facebook_btn]}
            onPress={() => {
              alert('button pressed');
            }}>
            <Icon name="facebook" size={18} style={styles.Icon} />
            <Text style={[styles.Font, styles.fbFont]}>FACEBOOK</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, styles.google_btn]}
            onPress={this.signIn}>
            <GOOGLEICON name="google" size={18} style={styles.Icon} />
            <Text style={[styles.Font]}>GOOGLE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.orView}>
          <Text style={styles.orText}>OR</Text>
        </View>
      </View>
    );
  }
}
export default FBWithGSignin;
