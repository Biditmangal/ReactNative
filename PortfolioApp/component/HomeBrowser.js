import React from "react";
import {Text, View} from "react-native";
import {Card, Image} from "react-native-elements";

const HomeBrowser = (props) => {

    return(
        <View>
            <Card>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                        marginRight: 10,
                        alignItems: 'center'
                    }}>
                        <Image
                            source={{uri: props.image}}
                            style={{
                                borderRadius: 50,
                                borderColor: '#000',
                                height: 100,
                                width: 100,
                            }}
                            resizeMode={"cover"}
                            transition={true}
                        />
                    </View>
                    <View style={{
                        flex: 2,
                        justifyContent: "center",
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                        }}>
                            Bidit Mangal
                        </Text>
                        <Text style={{
                            opacity: 0.5,
                            fontSize: 14,
                        }}>
                            Coder | Developer
                        </Text>
                    </View>
                </View>
            </Card>
        </View>
    )

};


export default HomeBrowser;