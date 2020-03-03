import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import styles from '../UserProfile/styles';


export default class UserProfile extends Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.ProfileBackground}>
                    <Image source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg' }} style={styles.ImageStyle}></Image>
                    <Text style={styles.nameStyle}>{'Name'}</Text>
                    <Text style={styles.emailStyle}>{'Email'}</Text>
                </View>
            </View>
        )
    }
}