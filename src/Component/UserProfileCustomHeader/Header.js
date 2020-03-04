import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ExitIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Styles_Header';

const Header = props => {
  return (
    <View style={styles.Container}>
      <View style={styles.iconStyle}>
        <ExitIcon name="exit-run" color={'black'} size={30} />
      </View>
      <View style={styles.titleStyle}>
        <Text style={styles.txtStyle}>APP NAME</Text>
      </View>
    </View>
  );
};

export default Header;
{/* 
 */}