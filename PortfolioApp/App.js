import React, {Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "./screens/Home"
import Contact from "./screens/Contact";
import Skills from "./screens/Skills";
import Project from "./screens/Project";
import Achievement from "./screens/Achievement";


const Tab = createMaterialTopTabNavigator();
const TopTab = createMaterialTopTabNavigator();


export default class App extends Component {

    createRootTabNavigator = () => {
        return (
            <Tab.Navigator
                tabBarPosition={'bottom'}
                tabBarOptions={{
                    showIcon: true,
                    activeTintColor: 'blue',
                    inactiveTintColor: '#000',
                    swipeEnabled: false,
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: () => (<Icon style={{color: '#000',}} size={27} name={'home'}/>)
                    }}/>
                <Tab.Screen
                    name="Skills"
                    component={Skills}
                    options={{
                        tabBarIcon: () => (<Icon style={{color: '#000'}} size={25} name={'source-branch'}/>)
                    }}/>
                <Tab.Screen
                    name="Work"
                    children={this.createTopBar}
                    options={{
                        tabBarIcon: () => (<Icon style={{color: '#000'}} size={25} name={'briefcase'}/>)
                    }}/>
                <Tab.Screen
                    name="Contact"
                    component={Contact}
                    options={{
                        tabBarIcon: () => (<Icon style={{color: '#000'}} size={25} name={'account-question'}/>)
                    }}/>
            </Tab.Navigator>
        )
    }

    createTopBar = () => {
        return (
            <TopTab.Navigator
                tabBarPosition={'bottom'}
                tabBarOptions={{
                    showIcon: true,
                    activeTintColor: 'rgba(40,120,200,0.9)',
                    inactiveTintColor: '#000',
                }}>
                <TopTab.Screen name="Projects" component={Project}/>
                <TopTab.Screen name="Achievements" component={Achievement}/>
            </TopTab.Navigator>

        );
    }

    // createStack = () => {
    //     return (
    //         <HomeStack.Navigator initialRouteName={Home} headerMode={'none'}>
    //             <HomeStack.Screen name="Home" component={Home}/>
    //             <HomeStack.Screen name="Project" component={Project}/>
    //             <HomeStack.Screen name="Achievement" component={Achievement} />
    //         </HomeStack.Navigator>
    //     )
    // }

    render() {
        return (
            <NavigationContainer>
                {this.createRootTabNavigator()}
            </NavigationContainer>
        );
    }
}
