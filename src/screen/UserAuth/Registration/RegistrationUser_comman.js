import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles_comman';

class RegistrationCommon extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.APP_BAR}>
          <Text style={styles.App_NAME}>APP NAME</Text>
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
        </View>
      </View>
    );
  }
}
export default RegistrationCommon;
