import React, { Component } from 'react';
import { View, Text, Image, BackHandler, TextInput } from 'react-native';
import { } from 'react-navigation';
import styles from '../UserProfile/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FAB } from 'react-native-paper';
import { GoogleSignin } from 'react-native-google-signin';
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton,
} from 'react-native-popup-dialog';

export default class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      //Heading/title of the header
      title: navigation.getParam('Title', 'Left Right Custom Header'),

      //Heading style
    };
  };
  Logout = () => {
    // alert('sunil')
    // GoogleSignin.signOut()
    // this.props.navigation.navigate('Login')
    // <Dialog
    //   dialogTitle={<DialogTitle title="Are You Sure??" />}
    //   visible={this.state.visible}
    //   footer={
    //     <DialogFooter>
    //       <DialogButton
    //         text="CANCEL"
    //         onPress={() => {
    //           this.setState({ visible: false });
    //         }}
    //       />
    //       <DialogButton text="Yes" onPress={() => { this.props.navigation.navigate('Login') }} />
    //     </DialogFooter>
    //   }>
    // </Dialog>
    this.setState({ visible: true });

  }

  ButtonAction = () => {
    this.setState({ visible: true });
    this.Logout()
  }

  // static navigationOptions = {
  //   title: 'Home',
  // };



  // static navigationOptions = ({navigator}) => {
  //   return {
  //     headerTitle: () => <Header />,
  //     headerRight: () => (
  //       <Button
  //         onPress={navigation.getParam('increaseCount')}
  //         title="+1"
  //         color="#fff"
  //       />
  //     ),
  //   };
  // };

  demo = () => {
    BackHandler.exitApp();
  };

  componentDidMount() {
    // const {pop} = this.props.navigation.actions;
    // // goBack = () => this.demo;
    // pop = () => this.demo;
    // BackHandler = () => this.demo;
  }

  render() {
    console.log('USer Profile > This ', this);
    console.log(
      'USer Profile > This.props.navigation :',
      this.props.navigation,
    );
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
          <Text style={styles.nameStyle}>
            {userInfo.name ? userInfo.name : 'Name'}
          </Text>
          <Text style={styles.emailStyle}>
            {userInfo.email ? userInfo.email : 'email'}
          </Text>
        </View>
        <Dialog
          dialogTitle={<DialogTitle title="Are You Sure??" />}
          visible={this.state.visible}
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                onPress={() => {
                  this.setState({ visible: false });
                }}
              />
              <DialogButton text="Yes" onPress={() => { this.props.navigation.navigate('Login') }} />
            </DialogFooter>
          }>
        </Dialog>
        <View style={styles.btnMainContainer}>
          {/* <TouchableOpacity style={styles.btnStyle} onPress={this.ButtonAction}>
            <Icon name="power-off" size={70} style={styles.iconStyle} />
          </TouchableOpacity> */}

          <FAB
            style={styles.FAB}
            icon="power"
            color={'white'}
            // loading={true}
            label={'Log out'}
            theme={{ colors: { accent: 'red' } }}
            // accessibilityLabel={'sunil'}
            onPress={this.ButtonAction}
          />
        </View>

      </View >
    );
  }
}
