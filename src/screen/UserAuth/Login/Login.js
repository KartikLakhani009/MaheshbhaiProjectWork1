import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FBWithGSignin from '../../../Component/ThirdPartySignin/Google+Fb';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* incomplete Title style */}
        <View>
          <Text style={styles.TitleThirdPArty}>Login With</Text>
        </View>

        {/* ThirdParty component */}

        <FBWithGSignin />
        {/* sign in logic here */}
        <View style={styles.MainView}>
          <View style={styles.View}>
            <Icon name="email" size={30} style={styles.iconStyle} />
            <TextInput style={styles.emailinput} label="Email" />
          </View>
          <View style={styles.View}>
            <Icon name="lock" size={30} style={styles.iconStyle} />
            <TextInput style={styles.emailinput} label="PassWord" />
          </View>
        </View>
      </View>
    );
  }
}
export default Login;
