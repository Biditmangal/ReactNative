import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    FlatList
} from "react-native";
import {styles} from "../styles/styles"
import {Header, Card, ListItem} from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProgressBar from "react-native-progress-fixed/Bar";

const list = [
    {
        title: 'Hello world',
        name: 'home',
    },
    {
        title: 'Hello world',
        name: 'home',
    },
    {
        title: 'Hello world',
        name: 'home',
    },
    {
        title: 'Hello world',
        name: 'home',
    },
    {
        title: 'Hello world',
        name: 'home',
    },

]
export default class Achievement extends Component {
    render() {
        return (
            <ScrollView>
                <Card containerStyle={{
                    flex: 1,
                    height: 50,
                }}>
                    {
                        list.map((item, i) => (
                            <Card>
                                <ListItem
                                    key={i}
                                    title={item.title}
                                    titleStyle={{
                                        marginLeft: 10,
                                    }}
                                    leftIcon={{name: item.name}}
                                />
                            </Card>
                        ))
                    }
                </Card>
            </ScrollView>
        );
    }
}