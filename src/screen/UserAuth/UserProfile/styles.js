import { StyleSheet } from 'react-native';
import Appstyles from '../../../assets/config/Styles';

const styles = StyleSheet.create({

    MainContainer: {
        height: Appstyles.responsiveHeight(30),
        // backgroundColor: 'yellow'
    },
    ProfileBackground: {
        backgroundColor: 'grey',
        height: Appstyles.responsiveHeight(15),
        alignItems: 'center'

    },

    ImageStyle: {
        height: Appstyles.responsiveHeight(20),
        width: Appstyles.responsiveWidth(40),
        borderRadius: 70,
        marginTop: Appstyles.responsiveHeight(4.5),
        marginBottom: 10
    },

})

export default styles;