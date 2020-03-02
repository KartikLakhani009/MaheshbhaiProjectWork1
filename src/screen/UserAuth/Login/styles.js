import {StyleSheet} from 'react-native';
import Appstyle from '../../../assets/config/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  TitleThirdPArty: {
    fontSize: Appstyle.fontSizeH1_2,
    color: Appstyle.COLOR.GREY_DARK,
  },
  View: {
    flexDirection: 'row',
    marginHorizontal: Appstyle.responsiveWidth(4),
  },
  emailinput: {
    width: Appstyle.responsiveWidth(50),
  },
});

export default styles;
