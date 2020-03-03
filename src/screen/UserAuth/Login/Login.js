import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native-paper';
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
      this.setState({errormsg: ''});
      this.validate({
        email: {email: true},
      });
      if (this.isFormValid()) {
        return this.props.navigation.navigate('UserProfile');
      }
    } else {
      this.setState({errormsg: 'Must be filled value'});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.TitleThirdPArty}>Login With</Text>
        </View>

        {/* ThirdParty component */}

        <FBWithGSignin />
        {/* sign in logic here */}
        <View style={styles.MainView}>
          <View style={styles.View}>
            <Icon name="email" size={22} style={styles.iconStyle} />
            <TextInput
              style={styles.input}
              label="Email"
              onChangeText={value => this.setState({email: value.trim()})}
            />
          </View>
          <View style={styles.View}>
            <Icon name="lock" size={22} style={styles.iconStyle} />
            <TextInput
              style={styles.input}
              label="Password"
              onChangeText={value => this.setState({password: value.trim()})}
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
            this.setState({visible: true});
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
            <Text style={{color: Appstyle.COLOR.WHITE}}>LOGIN</Text>
          </TouchableOpacity>
          <Dialog
            dialogTitle={<DialogTitle title="Forgot Password" />}
            visible={this.state.visible}
            footer={
              <DialogFooter>
                <DialogButton
                  text="CANCEL"
                  onPress={() => {
                    this.setState({visible: false});
                  }}
                />
                <DialogButton text="SEND" onPress={() => {}} />
              </DialogFooter>
            }
            onTouchOutside={() => {
              this.setState({visible: false});
            }}>
            <DialogContent></DialogContent>
          </Dialog>
        </View>
      </View>
    );
  }
}
export default Login;
