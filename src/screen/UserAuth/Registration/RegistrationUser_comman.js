import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles_comman';
import FBWithGSignin from '../../../Component/ThirdPartySignin/Google+Fb';

class RegistrationCommon extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.APP_BAR}>
          <Text style={styles.App_NAME}>APP NAME</Text>

          {/* Tab Bar Logic use here plz add Title here  */}
          <View style={styles.Reg_Bar}>
            <TouchableOpacity
              style={styles.Reg_Button}
              onPress={() => {
                alert('button pressed');
              }}>
              <Text style={styles.Reg_Text}>title</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Reg_Button}
              onPress={() => {
                alert('button pressed');
              }}>
              <Text style={styles.Reg_Text}>title</Text>
            </TouchableOpacity>
          </View>

          {/* Tab Bar End here */}
        </View>

        {/* Pages Logic */}

        {/* Comman Signin Functionality here */}
        <FBWithGSignin />
        {/* Sign in Func End */}
      </View>
    );
  }
}
export default RegistrationCommon;
