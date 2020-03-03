import { StyleSheet } from 'react-native';
import Appstyles from '../../../assets/config/Styles';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // height: Appstyles.responsiveHeight(50),
    // backgroundColor: 'yellow',
  },
  ProfileBackground: {
    backgroundColor: 'grey',
    height: Appstyles.responsiveHeight(15),
    alignItems: 'center',
  },

  ImageStyle: {
    height: Appstyles.countPixelRatio(150),
    width: Appstyles.countPixelRatio(150),
    borderRadius: 90,
    marginTop: Appstyles.responsiveHeight(3.5),
    marginBottom: 10,
  },

  nameStyle: {
    fontSize: Appstyles.fontSizeH2,
    fontWeight: 'bold',
  },
  emailStyle: {
    fontSize: Appstyles.fontSizeH3_4,
  },
  btnStyle: {
    // marginTop: 15,
    // backgroundColor: 'green',
    // height: Appstyles.responsiveHeight(5),
    // width: Appstyles.responsiveWidth(50),
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnMainContainer: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});

export default styles;
