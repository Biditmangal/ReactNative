import React, {Component} from 'react';
import {View,Text,Button,TouchableOpacity} from "react-native";
import {styles} from "../styles/styles"

export default class Skills extends Component{
    render() {
        return(
            <View style={styles.center}>
                <Text style={styles.title}>Skills Screen</Text>
            </View>
        );
    }
}