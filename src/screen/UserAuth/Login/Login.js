import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* incomplete Title style */}
        <View>
          <Text style={styles.TitleThirdPArty}>Login With</Text>
        </View>

        {/* ThirdParty component */}

        {/* sign in logic here */}
        <View style={styles.View}>
          <Icon name="email" size={30} />
          <TextInput style={styles.emailinput} label="Email" />
        </View>
      </View>
    );
  }
}
export default Login;
