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
  emailinput: {
    width: Appstyle.responsiveWidth(80),
    height: Appstyle.responsiveHeight(9),
    backgroundColor: 'transparent'
  },
  iconStyle: {
    // margin: Appstyle.responsiveWidth(2)
    // backgroundColor: 'red',
    marginTop: Appstyle.responsiveHeight(0.6)
  },

})

export default styles;
