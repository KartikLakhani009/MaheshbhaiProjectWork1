import {StyleSheet} from 'react-native';
import Appstyles from '../../../assets/config/Styles';

const styles = StyleSheet.create({
  MainContainer: {
    height: Appstyles.responsiveHeight(30),
    // backgroundColor: 'yellow'
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
    marginTop: Appstyles.responsiveHeight(4.5),
    marginBottom: 10,
  },
});

export default styles;
