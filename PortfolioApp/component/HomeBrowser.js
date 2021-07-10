import React from "react";
import {Dimensions, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {Color} from "../styles/Colors"
import {IconButton} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeBrowser = (props) => {
    return (
        <View style={{
            // margin:20,
            // shadowColor: "#000",
            // shadowOffset: {
            //     width: 0,
            //     height: 10,
            // },
            // shadowOpacity: 0.51,
            // shadowRadius: 13.16,
            // elevation: 20,
        }}>
            <View style={{
                flex: 1,
                height: Dimensions.get('screen').height / 4,
            }}>
                <ImageBackground
                    source={{uri: props.image}}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                    }}
                    resizeMode={"cover"}
                >
                    <View style={{
                        flexDirection: "row",
                        marginTop: Dimensions.get('screen').height / 4,
                        marginLeft: '5%',
                        marginRight: '3%',
                    }}>
                        <Image
                            source={{uri: props.image}}
                            style={{
                                width: 180,
                                height: 180,
                                borderRadius: 90,
                                borderWidth: 3,
                                borderColor: Color.PrimaryColor,
                                alignSelf: "flex-start",
                                marginLeft: 10,
                            }}
                            resizeMode={"cover"}/>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 36,
                            marginLeft: 35,
                            marginTop: 38,
                            color: Color.PrimaryColor,
                        }}>
                            Bidit Mangal
                        </Text>
                    </View>

                </ImageBackground>
            </View>
            <View style={{
                height: Dimensions.get('window').height / 2 + Dimensions.get('window').height / 8,
                flexDirection: "row",
                marginLeft: '5%',
                marginRight: '3%',
            }}>
                <View style={{
                    margin: 10,
                    marginTop: 95,
                    width: 180,
                    justifyContent: "flex-start ",
                }}>
                    <TouchableOpacity style={{
                        marginTop: 20,
                        borderColor: 'black',
                        borderWidth: 1,
                        height: 40,
                        backgroundColor: Color.PrimaryColor,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
                    }} onPress={() => props.click('Skills')}>
                        <Text>SKILLS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        marginTop: 20,
                        borderColor: 'black',
                        borderWidth: 1,
                        height: 40,
                        backgroundColor: Color.PrimaryColor,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
                    }} onPress={() => props.click('Work')}>
                        <Text>PROJECTS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        marginTop: 20,
                        borderColor: 'black',
                        borderWidth: 1,
                        height: 40,
                        backgroundColor: Color.PrimaryColor,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
                    }} onPress={() => props.click('Work')}>
                        <Text>ACHIEVEMENTS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        marginTop: 20,
                        borderColor: 'black',
                        borderWidth: 1,
                        height: 40,
                        backgroundColor: Color.PrimaryColor,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
                    }} onPress={() => props.click('Contact')}>
                        <Text>CONTACT ME</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        marginTop: 20,
                        flexDirection: "row",
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                                      disabled={true}>
                        <IconButton
                            icon={() => <Icon style={{color: 'rgb(0,180,200)',}} name={'twitter'} size={30}/>}
                            onPress={() => console.log('Pressed')}
                        />
                        <IconButton
                            icon={() => <Icon style={{color: 'rgb(0,180,200)'}} name={'instagram'} size={30}/>}
                            onPress={() => console.log('Pressed')}
                        />
                        <IconButton
                            icon={() => <Icon style={{color: 'rgb(0,180,200)'}} name={'linkedin'} size={30}/>}
                            onPress={() => console.log('Pressed')}
                        />
                        <IconButton
                            icon={() => <Icon style={{color: 'rgb(0,180,200)'}} name={'facebook'} size={30}/>}
                            onPress={() => console.log('Pressed')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 3,
                    margin: 10,
                    marginTop: 5,
                }}>
                    <View style={{
                        flex: 1,

                    }}>
                        <View style={{
                            flex: 1,
                            alignItems: "center",
                            borderBottomColor: 'gray',
                            borderBottomWidth: 2,
                            marginLeft: 10,
                            marginRight: 10,
                            justifyContent: "center"
                        }}>
                            <Text style={{fontSize: 20,}}>About</Text>
                        </View>
                        <View style={{
                            flex: 3,
                            marginTop: 10,
                            marginLeft: 10,
                            marginRight: 10,
                        }}>
                            <Text>Cras id neque vel eros molestie feugiat eget nec nisi.{'\n'}
                                Sed rhoncus magna a nisl vulputate, eget dapibus.{'\n'}
                                Praesent accumsan nibh luctus, dapibus eros nec.{'\n'}
                                Proin pharetra odio eget porta consectetur.{'\n'}
                                Sed a leo porta, aliquet velit et, blandit tellus.{'\n'}</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,

                    }}>
                        <View style={{
                            flex: 1,
                            alignItems: "center",
                            borderBottomColor: 'gray',
                            borderBottomWidth: 2,
                            marginLeft: 10,
                            marginRight: 10,
                            justifyContent: "center"
                        }}>
                            <Text style={{fontSize: 20,}}>Education</Text>
                        </View>
                        <View style={{
                            flex: 3,
                            marginTop: 10,
                            marginLeft: 10,
                            marginRight: 10,
                        }}>
                            <Text>Cras id neque vel eros molestie feugiat eget nec nisi.{'\n'}
                                Sed rhoncus magna a nisl vulputate, eget dapibus ligula ultricies.{'\n'}
                                Praesent accumsan nibh luctus, dapibus eros nec, ullamcorper dui.{'\n'}
                                Proin pharetra odio eget porta consectetur.{'\n'}
                                Sed a leo porta, aliquet velit et, blandit tellus.{'\n'}</Text>
                        </View>

                    </View>
                    <View style={{
                        flex: 1.5,
                    }}>
                        <View style={{
                            flex: 1,
                            alignItems: "center",
                            borderBottomColor: 'gray',
                            borderBottomWidth: 2,
                            marginLeft: 10,
                            marginRight: 10,
                            justifyContent: "center"
                        }}>
                            <Text style={{fontSize: 20,}}>HOBBIES</Text>
                        </View>
                        <View style={{
                            flex: 3,
                        }}>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeBrowser;