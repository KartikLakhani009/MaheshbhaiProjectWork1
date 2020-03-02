import { StyleSheet } from 'react-native';
import AppStyle from '../../assets/config/Styles';

const styles = StyleSheet.create({
  main: {
    marginVertical: AppStyle.responsiveHeight(2),
    // backgroundColor: '#f256',
  },
  container: {
    // flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    // marginVertical: AppStyle.responsiveHeight(2),
    marginHorizontal: AppStyle.responsiveWidth(12.5),
    // justifyContent: 'center',
  },

  //common
  btn: {
    margin: AppStyle.countPixelRatio(5),
    minWidth: AppStyle.responsiveWidth(35),
    height: AppStyle.responsiveHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 5,
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: { height: 10, width: 5 },
  },
  Icon: {
    color: AppStyle.COLOR.WHITE_OFF,

    width: AppStyle.responsiveWidth(8),
    // height: AppStyle.responsiveHeight(2),
  },
  Font: {
    textAlign: 'center',
    fontSize: AppStyle.fontSizeH2_3,
    color: AppStyle.COLOR.WHITE_OFF,
  },

  //FaceBook
  facebook_btn: {
    flexDirection: 'row',
    backgroundColor: AppStyle.COLOR.Facebook,
    shadowColor: AppStyle.COLOR.FACEBOOK_BLUE,
  },

  fbFont: {
    // color: 'white',
    color: AppStyle.COLOR.WHITE_OFF,
  },

  //Google
  google_btn: {
    flexDirection: 'row',
    backgroundColor: AppStyle.COLOR.Google,
    shadowColor: AppStyle.COLOR.GOOGLE_CINABAR,
  },
  fbFont: {
    // color: 'white',
    color: AppStyle.COLOR.WHITE_OFF,
  },

  orView: {
    alignItems: 'center',
    marginVertical: AppStyle.responsiveHeight(5),
  },
  orText: {
    fontSize: AppStyle.fontSizeH2_3,
    color: AppStyle.COLOR.GREY_DIM,
  },
});

export default styles;
