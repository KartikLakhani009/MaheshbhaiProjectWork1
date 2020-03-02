import {StyleSheet} from 'react-native';

import AppStyle from '../../../assets/config/Styles';

export default styles = StyleSheet.create({
  APP_BAR: {
    alignItems: 'center',
    backgroundColor: AppStyle.COLOR.THEME,
  },
  App_NAME: {
    marginVertical: AppStyle.responsiveHeight(3),
    color: AppStyle.COLOR.WHITE_OFF,
    fontSize: AppStyle.fontSizeH1,
  },
  Container: {
    flex: 1,
  },
  Reg_Button: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: AppStyle.COLOR.THEME,
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: {height: 10, width: 5},
    borderBottomColor: AppStyle.COLOR.WHITE_OFF,
    borderBottomWidth: AppStyle.responsiveWidth(2),
  },
  Reg_Text: {
    color: 'white',
    textAlign: 'center',
    fontSize: AppStyle.fontSizeH2_3,
  },
  Reg_Bar: {
    flexDirection: 'row',
  },
});
