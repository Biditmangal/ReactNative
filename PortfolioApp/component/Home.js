import React, {Component} from 'react';
import {View,Text,Button,TouchableOpacity} from "react-native";
import {styles} from "../styles/styles"
import Contact from "./Contact";
import Work from "./Work";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}>Home Screen</Text>
            </View>
        );
    }
}