import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    Linking
} from "react-native";
import {styles} from "../styles/styles";
import Panel from "react-native-panel";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default class Project extends Component {
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <ScrollView>
                    <Panel
                        header={"Panel 1"}
                        style={styles.ProjectPanel}
                    >
                        <View style={{
                            backgroundColor: 'cyan',
                        }}>
                            <Text style={styles.ProjectPanelText}>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscistyng elit,
                                sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: "space-between",
                                margin: 5,
                            }}>
                                <Text>Duration</Text>
                                <Text style={{
                                    marginRight: 5,
                                }}>Organisation</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: "space-between",
                                margin: 5,
                                marginTop: 0,
                            }}>
                                <Text>2 months</Text>
                                <Text>UPES ACM student chapters</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                margin: 5,
                            }}>
                                <FontAwesome5Icon name={'github'} style={{
                                    marginRight: 5,
                                }}/>
                                <Text onPress={()=>Linking.openURL('https://github.com/Biditmangal/ReactNative/tree/master/MyReactNative')}>Github Link</Text>
                            </View>
                        </View>
                    </Panel>
                </ScrollView>
            </View>
        );
    }
}