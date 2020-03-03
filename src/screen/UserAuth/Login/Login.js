import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FBWithGSignin from '../../../Component/ThirdPartySignin/Google+Fb';
import Appstyle from '../../.././assets/config/Styles';

class Login extends Component {

  constructor(props) {
    super(props)
  }

  CheckAuth = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.TitleThirdPArty}>Login With</Text>
        </View>

        {/* ThirdParty component */}

        <FBWithGSignin />
        {/* sign in logic here */}
        <View style={styles.MainView}>
          <View style={styles.View}>
            <Icon name="email" size={22} style={styles.iconStyle} />
            <TextInput style={styles.input} label="Email" />
          </View>
          <View style={styles.View}>
            <Icon name="lock" size={22} style={styles.iconStyle} />
            <TextInput style={styles.input} label="Password" />
          </View>
        </View>

        <TouchableOpacity style={styles.forgotStyle}>
          <Icon
            name="vpn-key"
            color={Appstyle.COLOR.Dodger_Blue}
            size={20}
            style={styles.iconStyle}></Icon>
          <Text style={styles.textColor}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={styles.btnStyle} onPress={() => { this.CheckAuth() }}>
            <Text style={{ color: Appstyle.COLOR.WHITE }}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Login;
