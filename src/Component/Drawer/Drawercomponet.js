import React, {Component} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import {withNavigation} from 'react-navigation';
import Styles from './Styles';

const [ImageDemo, ASYNC, FLATLIST] = [0, 1, 2];
const DRAWER = [
  {
    id: 0,
    name: 'ImageDemo',
    screen: 'ImagesD',
    icon: '',
  },
  {
    id: 1,
    name: 'ASYNC',
    screen: 'AsyncDemo2',
    icon: '',
  },
  {
    id: 2,
    name: 'FLATLIST',
    screen: 'FlatlistD',
    icon: '',
  },
];

class Drawercomponet extends Component {
  selectedItem = item => {
    console.log('Function Called');
    const {navigation} = this.props;
    switch (item.id) {
      case ImageDemo:
        navigation.navigate(item.screen);
        break;
      case ASYNC:
        console.log('Async Called ' + item.screen);
        navigation.navigate(item.screen);
        break;
      case FLATLIST:
        navigation.navigate(item.screen);
        break;
    }
  };

  render() {
    return (
      <View>
        <FlatList
          style={{flexDirection: 'row'}}
          data={DRAWER}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, key}) => (
            <View style={{padding: 3, marginTop: 35}}>
              <TouchableOpacity
                style={Styles.DItem}
                onPress={() => this.selectedItem(item)}>
                <Text style={Styles.DItemText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

export default withNavigation(Drawercomponet);
