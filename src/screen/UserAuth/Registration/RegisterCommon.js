import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Login/styles';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconUser from 'react-native-vector-icons/FontAwesome';
import FBWithGSignin from '../../../Component/ThirdPartySignin/Google+Fb';
import Appstyle from '../../../assets/config/Styles';

class RegisterCommon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.TitleThirdPArty}>Sign Up</Text>
        </View>
        <View>
          <Text style={styles.FreeACStyle}>Get a free account using social logins</Text>
        </View>
        {/* ThirdParty component */}
        <FBWithGSignin />
        <View>
          <Text style={styles.SignUpEmailText}>Sign Up using email</Text>
        </View>
        {/* sign Up logic here */}
        <View style={styles.MainView}>
          <View style={styles.View}>
            <IconUser name="user" size={22} style={styles.iconStyle} />
            <TextInput style={styles.input} label="Name" />
          </View>
          <View style={styles.View}>
            <Icon name="email" size={22} style={styles.iconStyle} />
            <TextInput style={styles.input} label="Email" />
          </View>
          <View style={styles.View}>
            <Icon name="lock" size={22} style={styles.iconStyle} />
            <TextInput style={styles.input} label="Password" />
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={{ color: Appstyle.COLOR.WHITE }}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default RegisterCommon;