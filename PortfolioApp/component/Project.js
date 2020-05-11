import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView
} from "react-native";
import {styles} from "../styles/styles"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Project extends  Component{
    render() {
        return (
            <View style={styles.center}>
                <Text>Project Screen</Text>
            </View>
        );
    }
}