import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GOOGLEICON from 'react-native-vector-icons/AntDesign';
import AppStyle from '../../assets/config/Styles';

class FBWithGSignin extends Component {
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
            onPress={() => {
              alert('button pressed');
            }}>
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
