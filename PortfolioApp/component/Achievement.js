import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView
} from "react-native";
import {styles} from "../styles/styles"
import {Header} from "react-native-elements";

export default class Achievement extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text>Achievement Screen</Text>
            </View>
        );
    }
}