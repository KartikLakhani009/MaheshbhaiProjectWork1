import {StyleSheet} from 'react-native';
import Appstyle from '../../../assets/config/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  TitleThirdPArty: {
    fontSize: Appstyle.fontSizeH1_2,
    color: Appstyle.COLOR.GREY_DARK,
    marginTop: Appstyle.responsiveHeight(2),
  },

  FreeACStyle: {
    fontSize: Appstyle.fontSizeH2_3,
    color: Appstyle.COLOR.GREY_DARK,
    marginTop: Appstyle.responsiveHeight(2),
  },

  SignUpEmailText: {
    fontSize: Appstyle.fontSizeH2_3,
    color: Appstyle.COLOR.GREY_DARK,
    marginBottom: Appstyle.responsiveHeight(2),
    marginTop: Appstyle.responsiveHeight(2),
  },
  View: {
    flexDirection: 'row',

    marginBottom: Appstyle.responsiveHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: Appstyle.responsiveWidth(80),
    height: Appstyle.responsiveHeight(8),
    backgroundColor: 'transparent',
  },
  iconStyle: {
    // margin: Appstyle.responsiveWidth(2)
    // backgroundColor: 'red',
    // marginTop: Appstyle.responsiveHeight(0.6)
  },
  forgotStyle: {
    flexDirection: 'row',
    marginVertical: Appstyle.responsiveHeight(2),
    // backgroundColor: 'yellow'
  },
  textColor: {
    color: Appstyle.COLOR.Dodger_Blue,
    marginLeft: Appstyle.responsiveWidth(2),
  },
  btnStyle: {
    backgroundColor: Appstyle.COLOR.Dodger_Blue,
    height: Appstyle.responsiveHeight(6),
    width: Appstyle.responsiveWidth(90),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Appstyle.responsiveHeight(3),
  },
  ErrorText: {
    textAlign: 'center',
    color: Appstyle.COLOR.RED_REDICAL,
  },
});

export default styles;
