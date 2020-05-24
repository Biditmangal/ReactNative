import React from "react";
import Panel from "react-native-panel";
import {styles} from "../styles/styles";
import {Linking, Text, View} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";


const ProjectPanel = (item) => {
    return (
        <Panel
            header={'Project ' + item.title}
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
                    }}>{item.organization}</Text>
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
                    <Text onPress={() => Linking.openURL(item.link)}>
                        Github Link
                    </Text>
                </View>
            </View>
        </Panel>
    )
}

export default ProjectPanel;