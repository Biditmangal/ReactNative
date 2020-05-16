import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from "react-native";
import {Header} from "react-native-elements";
import * as firebase from "firebase/app";
import "firebase/database";

import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {styles} from "./styles/styles"

import Home from "./component/Home"
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Achievement from "./component/Achievement";

const firebaseConfig = {
    apiKey: "AIzaSyDkedJPadEa1yWX_gwXMvR45oBUiWvh9no",
    authDomain: "portfolioapp-e8c63.firebaseapp.com",
    databaseURL: "https://portfolioapp-e8c63.firebaseio.com",
    projectId: "portfolioapp-e8c63",
    storageBucket: "portfolioapp-e8c63.appspot.com",
    messagingSenderId: "583969798672",
    appId: "1:583969798672:web:e2edf32b022a1914f32895",
    measurementId: "G-Z95BFP8V8F"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const Tab = createMaterialTopTabNavigator();
const TopTab = createMaterialTopTabNavigator();


export default class App extends Component {

    createTopBar() {
        return (
            <View style={{
                flex: 1,
            }}>
                {/*<Header*/}
                {/*    centerComponent={{text: 'WORK', style: {color: 'white'}}}*/}
                {/*    containerStyle={{height:50,backgroundColor: 'black',}}*/}
                {/*/>*/}
                <TopTab.Navigator
                    tabBarPosition={'bottom'}
                    tabBarOptions={{
                        showIcon: true,
                        activeTintColor: 'blue',
                        inactiveTintColor: 'black',
                        indicatorStyle:{
                            position:'top',
                        }
                    }}>
                    <TopTab.Screen name="Projects" component={Project}/>
                    <TopTab.Screen name="Achievements" component={Achievement}/>
                </TopTab.Navigator>
            </View>
        );
    }

    render() {
        return (
            <NavigationContainer >
                <Tab.Navigator
                    tabBarPosition={'bottom'}
                    tabBarOptions={{
                        showIcon: true,
                        activeTintColor: 'blue',
                        inactiveTintColor: 'black',
                        swipeEnabled: false,
                        allowFontScaling:true,
                    }}>
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            tabBarIcon: () => (
                                <Icon style={{color: 'black',}} size={27} name={'home'}/>)
                        }}/>
                    <Tab.Screen
                        name="Work"
                        children={this.createTopBar}
                        options={{
                            tabBarIcon: () => (
                                <Icon style={{color: 'black'}} size={25} name={'briefcase'}/>)
                        }}/>
                    <Tab.Screen
                        name="Skills"
                        component={Skills}
                        options={{
                            tabBarIcon: () => (
                                <Icon style={{color: 'black'}} size={25} name={'source-branch'}/>)
                        }}/>
                    <Tab.Screen
                        name="Contact"
                        component={Contact}
                        options={{
                            tabBarIcon: () => (
                                <Icon style={{color: 'black'}} size={25} name={'account-question'}/>)
                        }}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
