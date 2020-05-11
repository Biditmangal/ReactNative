import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from "react-native";
import {Header} from "react-native-elements";

import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {styles} from "./styles/styles"

import Home from "./component/Home"
import Contact from "./component/Contact";
import Work from "./component/Work";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Achievement from "./component/Achievement";


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
                    }}>
                    <TopTab.Screen name="Projects" component={Project}/>
                    <TopTab.Screen name="Achievements" component={Achievement}/>
                </TopTab.Navigator>
            </View>
        );
    }

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    tabBarPosition={'bottom'}
                    tabBarOptions={{
                        showIcon: true,
                        activeTintColor: 'blue',
                        inactiveTintColor: 'black',
                        swipeEnabled: false,
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
