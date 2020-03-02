import { StyleSheet } from 'react-native';
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
    marginVertical: Appstyle.responsiveHeight(3)
  },
  View: {
    flexDirection: 'row',

    marginBottom: Appstyle.responsiveHeight(2),
    justifyContent: 'center',
    alignItems: 'center'

  },
  input: {
    width: Appstyle.responsiveWidth(80),
    height: Appstyle.responsiveHeight(9),
    backgroundColor: 'transparent',
  },
  iconStyle: {
    // margin: Appstyle.responsiveWidth(2)
    // backgroundColor: 'red',
    // marginTop: Appstyle.responsiveHeight(0.6)
  },

  forgotStyle2: {
    marginVertical: Appstyle.responsiveHeight(2)
  },

  forgotStyle: {
    flexDirection: 'row',

    // backgroundColor: 'yellow'
  },
  textColor: {
    color: Appstyle.COLOR.Dodger_Blue,
    marginLeft: Appstyle.responsiveWidth(2)
  },
  btnStyle: {
    backgroundColor: Appstyle.COLOR.Dodger_Blue,
    height: Appstyle.responsiveHeight(6),
    width: Appstyle.responsiveWidth(90),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Appstyle.responsiveHeight(5)
  }

})

export default styles;
