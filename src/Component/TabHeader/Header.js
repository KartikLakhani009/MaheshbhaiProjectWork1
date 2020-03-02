import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Styles_Header';

const Header = props => {
  return (
    // new changes on version
    <View style={styles.Container}>
      <View style={styles.APP_BAR}>
        <Text style={styles.App_NAME}>APP NAME</Text>

        {/* Tab Bar Logic use here plz add Title here  */}

        {/* Tab Bar End here */}
      </View>
    </View>
  );
};

export default Header;
