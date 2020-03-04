import {StyleSheet} from 'react-native';

import AppStyle from '../../assets/config/Styles';

export default styles = StyleSheet.create({
  APP_BAR: {
    // alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: AppStyle.COLOR.Dodger_Blue,
  },
  App_NAME: {
    marginVertical: AppStyle.responsiveHeight(3),
    color: AppStyle.COLOR.WHITE_OFF,
    fontSize: AppStyle.fontSizeH1,
    textAlign: 'center',
  },
  Container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    height: AppStyle.responsiveHeight(9),
    justifyContent: 'center',
  },
});
