import React, {Component} from 'react';
import {View,Text,Button,TouchableOpacity} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from "./styles/styles"

import Home from "./component/Home"
import Contact from "./component/Contact";
import Work from "./component/Work";
import Skills from "./component/Skills";

const Tab=createMaterialTopTabNavigator();
export default class App extends Component {
    render() {
        return (
          <NavigationContainer>
              <Tab.Navigator
                  tabBarPosition={'bottom'}
                  tabBarOptions={{
                      showIcon:true,
                      activeTintColor:'blue',
                      inactiveTintColor:'black'
                  }}>
                  <Tab.Screen
                      name="Home"
                      component={Home}
                      options={{
                          tabBarIcon: () => (
                          <Icon style={{ color: 'black' }} size={27} name={'home'} />)
                      }}/>
                  <Tab.Screen
                      name="Work"
                      component={Work}
                      options={{
                          tabBarIcon: () => (
                          <Icon style={{color:'black'}} size={25} name={'briefcase'} />)
                      }}/>
                  <Tab.Screen
                      name="Skills"
                      component={Skills}
                      options={{
                          tabBarIcon: () => (
                          <Icon style={{ color: 'black' }} size={25} name={'source-branch'} />)
                      }}/>
                  <Tab.Screen
                      name="Contact"
                      component={Contact}
                      options={{
                          tabBarIcon: () => (
                          <Icon style={{ color: 'black' }} size={25} name={'account-question'} />)
                      }}/>
              </Tab.Navigator>
          </NavigationContainer>
        );
    }
}
