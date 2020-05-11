import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    FlatList
} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import {NavigationContainer} from "@react-navigation/native";
import Project from "./Project";
import Achievement from "./Achievement";
import {styles} from "../styles/styles"
import {Card} from "react-native-elements";

const Tab = createMaterialTopTabNavigator();

export default class Work extends Component {
    render() {
        return (
            // <View>
            //     <NavigationContainer >
            //         <Tab.Navigator
            //             tabBarOptions={{
            //                 showIcon: true,
            //                 activeTintColor: 'blue',
            //                 inactiveTintColor: 'black'
            //             }}>
            //             <Tab.Screen
            //                 name={"Project"}
            //                 component={Project}
            //             />
            //             <Tab.Screen
            //                 name={"Achievement"}
            //                 component={Achievement}
            //             />
            //         </Tab.Navigator>
            //     </NavigationContainer>
            // </View>
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flex: 1,
                    backgroundColor: "white",
                    margin: 10,
                    marginBottom: 0,
                }}>
                    <View style={{
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: 'gray',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            textTransform: 'uppercase',
                            fontSize: 20,
                        }}>
                            Projects
                        </Text>
                    </View>
                    <View style={{
                        flex: 10,
                        margin: 5,
                    }}>
                        <FlatList
                            data={[
                                {title: 'Project', number: '1'},
                                {title: 'Project', number: '2'},
                                {title: 'Project', number: '3'},
                                {title: 'Project', number: '4'},
                                {title: 'Project', number: '5'},
                                {title: 'Project', number: '6'},
                                {title: 'Project', number: '7'},
                                {title: 'Project', number: '8'},
                            ]}
                            renderItem={({item}) =>
                                <Card containerStyle={{
                                    flex:1,
                                }}>
                                    <Text style={{
                                        textTransform: 'uppercase',

                                    }}>
                                        {item.title} {item.number}
                                    </Text>
                                </Card>
                            }
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: 'black',
                    margin: 10,
                }}>
                    <View style={{
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: 'gray',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            textTransform: 'uppercase',
                            fontSize: 20,
                            color:'white',
                        }}>
                            Achievements
                        </Text>
                    </View>
                    <View style={{
                        flex: 10,
                        marginBottom:-5,
                    }}>
                        <FlatList
                            data={[
                                {title: 'Achievements', number: '1'},
                                {title: 'Achievements', number: '2'},

                            ]}
                            renderItem={({item}) =>
                                <Card containerStyle={{
                                    flex:1,
                                }}>
                                    <Text style={{
                                        textTransform: 'uppercase',
                                    }}>
                                        {item.title} {item.number}
                                    </Text>
                                </Card>
                            }
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        );
    }
}