import React from "react";
import {
    Dimensions,
    ImageBackground,
    Text,
    View,
    Image
} from "react-native";
import {IconButton} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomePhone = (props) => {
    return (
        <View>
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
                />
            </View>
            <View>
                <Image
                    source={{uri: props.image}}
                    style={{
                        width: 130,
                        height: 130,
                        borderRadius: 63,
                        borderWidth: 4,
                        borderColor: "rgb(0,180,200)",
                        marginBottom: 10,
                        alignSelf: 'center',
                        position: 'absolute',
                        marginTop: -65,
                    }}
                    resizeMode={"cover"}/>

                <View style={{
                    flex: 1,
                    marginTop: 65,
                    alignItems: "center",
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 36,
                    }}>
                        Bidit Mangal
                    </Text>
                    <Text style={{
                        opacity: 0.5,
                        fontSize: 20,
                    }}>
                        Coder | Developer
                    </Text>

                    <View style={{
                        borderColor: 'black',
                        borderWidth: 1,
                        marginTop: 30,
                        margin: 10,
                        width: Dimensions.get('screen').width / 1.2,
                        height: Dimensions.get('window').height / 10,
                    }}>
                        <Text>
                            About
                        </Text>
                    </View>
                    <View style={{
                        borderColor: 'black',
                        borderWidth: 1,
                        margin: 10,
                        width: Dimensions.get('screen').width / 1.2,
                        height: Dimensions.get('window').height / 10,
                    }}>
                        <Text>
                            Education
                        </Text>
                    </View>
                    <View style={{
                        borderColor: 'black',
                        borderWidth: 1,
                        margin: 10,
                        width: Dimensions.get('screen').width / 1.2,
                        height: Dimensions.get('window').height / 10 + 20,
                    }}>
                        <Text>
                            Hobbies
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginBottom:Dimensions.get('window').height/50 ,
                    }}>
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
                    </View>
                </View>
            </View>
        </View>
    );

};

export default HomePhone;