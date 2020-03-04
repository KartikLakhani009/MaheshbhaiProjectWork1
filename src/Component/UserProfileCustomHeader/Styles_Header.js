import { StyleSheet } from 'react-native';

import AppStyle from '../../assets/config/Styles';

export default styles = StyleSheet.create({

  Container: {
    flexDirection: 'row',
    backgroundColor: AppStyle.COLOR.Dodger_Blue,
    height: AppStyle.responsiveHeight(10),
  },

  iconStyle: {
    // backgroundColor: 'red',
    justifyContent: 'center'
  },

  titleStyle: {
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: AppStyle.responsiveWidth(5)
  },

  txtStyle: {
    fontSize: AppStyle.fontSizeH1,
    color: AppStyle.COLOR.WHITE_OFF
  }
});
