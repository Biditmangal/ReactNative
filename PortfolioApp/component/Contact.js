import React, {Component} from 'react';
import {View,Text,Button,TouchableOpacity,TextInput} from "react-native";
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import {styles} from "../styles/styles"

export default class Contact extends Component{
    render() {
        return(
            <View style={styles.contact1}>
                <TextInput style={styles.text} placeholder={'Name'}/>
                <TextInput style={styles.text} placeholder={'Email'}/>
                <TextInput style={styles.text} placeholder={'Message'}/>
            </View>
        );
    }
}