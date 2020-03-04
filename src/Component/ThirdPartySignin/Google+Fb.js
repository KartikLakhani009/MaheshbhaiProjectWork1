import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GOOGLEICON from 'react-native-vector-icons/AntDesign';
import AppStyle from '../../assets/config/Styles';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import conf from '../../assets/config/Googleconfig';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

class FBWithGSignin extends Component {
  constructor(props) {
    super(props);
  }

  signIn = async () => {
    try {
      // GoogleSignin.signOut().then(res => console.log(res));
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

  FBLogin = () => {
    // var user = this;
    const { navigate } = this.props.navigation;
    // console.log('try navigate', navigate);

    LoginManager.logOut();
    // LoginManager.getDefaultAudience(user)
    // console.log('Logout res :', res);
    // .then(res => console.log('Logout  res : ', res));
    Platform.OS = 'android' ? LoginManager.setLoginBehavior('web_only') : null;
    // LoginManager.setLoginBehavior('web_only');
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      async function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
          alert('Login cancelled');
        } else {
          await AccessToken.getCurrentAccessToken().then(async data => {
            // console.log(data);
            const infoRequest = new GraphRequest(
              '/me?fields=name,email,picture.type(large)',
              null,
              async (error, result) => {
                if (error) {
                  console.log('Error fetching data: ', error);
                  alert('Error', error);
                } else {
                  alert(JSON.stringify(result));
                  console.log(
                    'Success fetching data: ',
                    JSON.stringify(result),
                  );

                  return navigate('UserProfile', {
                    userInfo: {
                      name: result.name,
                      email: result.email,
                      photo: result.picture.data.url,
                    },
                  });
                }
              },
            );

            await new GraphRequestManager().addRequest(infoRequest).start();

            //second way
            // await fetch(
            //   'https://graph.facebook.com/v2.5/me?fields=id,first_name,last_name,email,picture.type(large)&access_token=' +
            //     data.AccessToken,
            // ).then(res => {
            //   user = res.json();
            //   console.log('user : ', user);
            //   alert('Login Sucessfully');
            // });
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ', error);
        alert('Login fail with error: ', error);
      },
    );
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
            onPress={this.FBLogin}>
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
