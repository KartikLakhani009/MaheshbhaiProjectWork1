import React from 'react';
import {View} from 'react-native';
import {TextInput, Text} from 'react-native-paper';

const TextField = props => {
  console.log(props);
  return (
    <View>
      <Icon />
      <TextInput />
      {props.error && <Text>{props.error}</Text>}
    </View>
  );
};

export default TextField;
