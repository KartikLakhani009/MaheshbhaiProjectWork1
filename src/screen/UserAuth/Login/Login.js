import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  AsyncStorage,
  Modal,
  Button,
} from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FBWithGSignin from '../../../Component/ThirdPartySignin/Google+Fb';
import Appstyle from '../../.././assets/config/Styles';
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton,
} from 'react-native-popup-dialog';
// import validation from '../../../lib/validation/validation';
import ValidationComponent from 'react-native-form-validator';

class Login extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errormsg: '',
      visible: false,
    };
  }

  CheckAuth = (email, password) => {
    if (email && password) {
      this.setState({ errormsg: '' });
      this.validate({
        email: { email: true },
      });
      if (this.isFormValid()) {
        return this.props.navigation.navigate('UserProfile');
      }
    } else {
      this.setState({ errormsg: 'Must be filled value' });
    }
  };

  bypass = () => {
    return this.props.navigation.navigate('UserProfile', {
      userInfo: {
        name: 'Demo',
        email: 'Demo',
        photo: '',
      },
    });
  };

  render() {
    let user;

    AsyncStorage.getItem('User')
      .then(res => {
        console.log('res : ', res);
        if (res != null) {
          user = JSON.parse(res);
          console.log('User  :', user);
          return this.props.navigation.navigate('UserProfile', {
            userInfo: user,
          });
        }
      })
      .catch(err => console.log('err : ', err));
    // if (user != null) {
    //   return props.navigation.navigate('UserProfile', { userInfo: user });
    // }

    return (
      <KeyboardAvoidingView
        // style={{backgroundColor: 'green', padding: 0}}
        behavior={'position'}>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text style={styles.TitleThirdPArty}>Login With</Text>
            </View>

            {/* ThirdParty component */}

            <FBWithGSignin {...this.props} />
            {/* sign in logic here */}
            <View style={styles.MainView}>
              <View style={styles.View}>
                <Icon name="email" size={22} style={styles.iconStyle} />
                <TextInput
                  style={styles.input}
                  label="Email"
                  onChangeText={value => this.setState({ email: value.trim() })}
                />
              </View>
              <View style={styles.View}>
                <Icon name="lock" size={22} style={styles.iconStyle} />
                <TextInput
                  style={styles.input}
                  label="Password"
                  onChangeText={value =>
                    this.setState({ password: value.trim() })
                  }
                  secureTextEntry={true}
                />
              </View>
            </View>

            {this.state.errormsg != '' && (
              <Text style={styles.ErrorText}>{this.state.errormsg}</Text>
            )}
            <Text style={styles.ErrorText}>{this.getErrorMessages()}</Text>

            <TouchableOpacity
              style={styles.forgotStyle}
              onPress={() => {
                this.setState({ visible: true });
              }}>
              <Icon
                name="vpn-key"
                color={Appstyle.COLOR.Dodger_Blue}
                size={20}
                style={styles.iconStyle}></Icon>
              <Text style={styles.textColor}>FORGOT PASSWORD?</Text>
            </TouchableOpacity>

            <View>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => {
                  this.CheckAuth(this.state.email, this.state.password);
                }}>
                <Text style={{ color: Appstyle.COLOR.WHITE }}>LOGIN</Text>
              </TouchableOpacity>

              <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.state.visible}
                onRequestClose={() => { console.log("Modal has been closed.") }}>
                {/*All views of Modal*/}
                <View style={styles.modal}>
                  <Text style={styles.text}>Modal is open!</Text>
                  <Button title="Click To Close Modal" onPress={() => {
                    this.setState({ visible: !this.state.visible })
                  }} />
                </View>
              </Modal>
              {/* <Dialog
                dialogTitle={<DialogTitle title="Forgot Password" />}
                visible={this.state.visible}
                footer={
                  <DialogFooter>
                    <DialogButton
                      text="CANCEL"
                      onPress={() => {
                        this.setState({ visible: false });
                      }}
                    />
                    <DialogButton text="RECOVERY" onPress={() => { }} />
                  </DialogFooter>
                }
                onTouchOutside={() => {
                  this.setState({ visible: false });
                }}>
                <DialogContent>
                  <View style={styles.View}>
                    <Icon name="email" size={22} style={styles.iconStyle} />
                    <TextInput
                      style={styles.input}
                      label="Email"
                      onChangeText={value =>
                        this.setState({ email: value.trim() })
                      }
                    />
                  </View>
                </DialogContent>
              </Dialog> */}
            </View>

            <View style={{ marginTop: 25 }}>
              <TouchableOpacity
                style={{
                  minWidth: 150,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#2AC062',
                  display: 'flex',
                  borderRadius: 5,
                  shadowColor: '#2AC062',
                  shadowOpacity: 0.4,
                  shadowRadius: 20,
                  shadowOffset: { height: 10, width: 5 },
                }}
                onPress={this.bypass}>
                <Text
                  style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
                  By pass
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
export default Login;
