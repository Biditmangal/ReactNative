import React, {Component} from 'react';
import {
    View,
    Text,
    Linking,
    FlatList,
} from "react-native";
import {styles} from "../styles/styles";
import Panel from "react-native-panel";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";


export default class Project extends Component {
    state = {
        projects: []
    }


    dataToRender = () => {
        let Projects = [...this.state.projects]

        let data = [
            {
                id: 1,
                desc: 'Lorem ipsum dolor sit amet,\n' +
                    'consectetur adipiscistyng elit,\n' +
                    'sed do eiusmod tempor incididunt ut\n' +
                    'labore et dolore magna aliqua',
                orgzn: 'UPES ACM student chapters',
                duration: 2,
                link: 'https://github.com/Biditmangal/ReactNative/tree/master/MyReactNative'
            },
            {
                id: 2,
                desc: 'Lorem ipsum dolor sit amet,\n' +
                    'consectetur adipiscistyng elit,\n' +
                    'sed do eiusmod tempor incididunt ut\n' +
                    'labore et dolore magna aliqua',
                orgzn: 'UPES ACM student chapters',
                duration: 2,
                link: 'https://github.com/Biditmangal/ReactNative/tree/master/MyReactNative'
            },
            {
                id: 3,
                desc: 'Lorem ipsum dolor sit amet,\n' +
                    'consectetur adipiscistyng elit,\n' +
                    'sed do eiusmod tempor incididunt ut\n' +
                    'labore et dolore magna aliqua',
                orgzn: 'UPES ACM student chapters',
                duration: 2,
                link: 'https://github.com/Biditmangal/ReactNative/tree/master/MyReactNative'
            },
            {
                id: 4,
                desc: 'Lorem ipsum dolor sit amet,\n' +
                    'consectetur adipiscistyng elit,\n' +
                    'sed do eiusmod tempor incididunt ut\n' +
                    'labore et dolore magna aliqua',
                orgzn: 'UPES ACM student chapters',
                duration: 2,
                link: 'https://github.com/Biditmangal/ReactNative/tree/master/MyReactNative'
            },
            {
                id: 5,
                desc: 'Lorem ipsum dolor sit amet,\n' +
                    'consectetur adipiscistyng elit,\n' +
                    'sed do eiusmod tempor incididunt ut\n' +
                    'labore et dolore magna aliqua',
                orgzn: 'UPES ACM student chapters',
                duration: 2,
                link: 'https://github.com/Biditmangal/ReactNative/tree/master/MyReactNative'
            },
            {
                id: 6,
                desc: 'Lorem ipsum dolor sit amet,\n' +
                    'consectetur adipiscistyng elit,\n' +
                    'sed do eiusmod tempor incididunt ut\n' +
                    'labore et dolore magna aliqua',
                orgzn: 'UPES ACM student chapters',
                duration: 2,
                link: 'https://github.com/Biditmangal/ReactNative/tree/master/MyReactNative'
            },
            {
                id: 7,
                desc: 'Lorem ipsum dolor sit amet,\n' +
                    'consectetur adipiscistyng elit,\n' +
                    'sed do eiusmod tempor incididunt ut\n' +
                    'labore et dolore magna aliqua',
                link: 'https://github.com/Biditmangal/ReactNative/tree/master/MyReactNative',
                orgzn: 'UPES ACM student chapters',
                duration: 2,
            },
            {
                id: 8,
                desc: 'Lorem ipsum dolor sit amet,\n' +
                    'consectetur adipiscistyng elit,\n' +
                    'sed do eiusmod tempor incididunt ut\n' +
                    'labore et dolore magna aliqua',
                link: 'https://github.com/Biditmangal/ReactNative/tree/master/MyReactNative',
                orgzn: 'UPES ACM student chapters',
                duration: 2,
            },
        ]
        Projects = [...data]
        return Projects;
    }

    renderListItem = (item) => {
        return(
            <Panel
                header={`Project ${item.id}`}
                style={styles.ProjectPanel}
            >
                <View style={{
                    margin: 5,
                }}>
                    <Text style={styles.ProjectPanelText}>
                        {item.desc}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        margin: 5,
                    }}>
                        <Text style={{
                            fontSize: 14,
                            opacity: 0.8,
                        }}>Duration:</Text>
                        <Text style={{
                            fontSize: 14,
                            marginRight: 5,
                            opacity: 0.8,
                        }}>Organisation:</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        margin: 5,
                        marginTop: 0,
                    }}>
                        <Text style={{
                            fontSize: 12,
                        }}>{item.duration + ' months'}</Text>
                        <Text style={{
                            fontSize: 12,
                        }}>{item.orgzn}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 10,
                        alignItems: 'center',
                    }}>
                        <FontAwesome5Icon
                            name={'github'}
                            style={{
                                marginRight: 5,
                            }}
                            size={20}
                        />
                        <Text
                            onPress={() => Linking.openURL(item.link)}>Github
                            Link</Text>
                    </View>
                </View>
            </Panel>
        )
    }

    render() {
        return (
            <View style={styles.ProjectBody}>
                <View style={styles.ProjectList}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.dataToRender()}
                        renderItem={({item}) =>this.renderListItem(item)}
                    />
                </View>
            </View>
        );
    }
}