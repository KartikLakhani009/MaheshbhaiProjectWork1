import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../UserProfile/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class UserProfile extends Component {
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
          <TouchableOpacity style={styles.btnStyle}>
            <Icon name="logout" size={70} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
