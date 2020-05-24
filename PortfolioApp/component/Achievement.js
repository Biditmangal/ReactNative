import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    FlatList
} from "react-native";
import {styles} from "../styles/styles"
import {
    Header,
    Card,
    ListItem,
} from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
            <View style={styles.AchievementContainer}>
                <View style={styles.AchievementList}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={[
                            {title: 'Achievement 1', name: 'adjust'},
                            {title: 'Achievement 2', name: 'account-star'},
                            {title: 'Achievement 3', name: 'adjust'},
                            {title: 'Achievement 4', name: 'account-star'},
                            {title: 'Achievement 5', name: 'adjust'},
                            {title: 'Achievement 6', name: 'account-star'},
                            {title: 'Achievement 7', name: 'adjust'},
                            {title: 'Achievement 8', name: 'account-star'},
                        ]}
                        renderItem={({item}) =>
                            <Card>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: 10,
                                }}>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'flex-end',
                                        flexDirection: 'row',
                                        marginRight: 10,
                                        alignItems: 'center'
                                    }}>
                                        <Icon style={{color: 'black',}} size={27} name={item.name}/>
                                    </View>
                                    <View style={{
                                        flex: 8,
                                    }}>
                                        <Text style={styles.AchievementText}>
                                            {item.title}
                                        </Text>
                                        <View style={styles.DescriptionText}>
                                            <Text style={{
                                                opacity: 0.5,
                                            }}>
                                                Description
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </Card>
                        }

                    />
                </View>
            </View>
        );
    }
}