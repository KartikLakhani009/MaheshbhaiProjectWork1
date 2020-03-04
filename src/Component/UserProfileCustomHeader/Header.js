import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ExitIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Styles_Header';

const Header = props => {
  return (
    // new changes on version
    <View style={styles.Container}>
      <View style={{alignSelf: 'flex-start'}}>
        <ExitIcon name="exit-run" color={'black'} size={30} />
      </View>
      <View style={styles.APP_BAR}>
        <Text style={styles.App_NAME}>APP NAME</Text>

        {/* Tab Bar Logic use here plz add Title here  */}

        {/* Tab Bar End here */}
      </View>
    </View>
  );
};

export default Header;
