import {StyleSheet} from 'react-native';

import AppStyle from '../../assets/config/Styles';

export default styles = StyleSheet.create({
  APP_BAR: {
    alignItems: 'center',
    backgroundColor: AppStyle.COLOR.Dodger_Blue,
    // backgroundColor: 'red',

    height: AppStyle.responsiveHeight(9),
  },
  App_NAME: {
    marginVertical: AppStyle.responsiveHeight(3),
    color: AppStyle.COLOR.WHITE_OFF,
    fontSize: AppStyle.fontSizeH1,
  },
  Container: {
    flex: 1,
  },
});
