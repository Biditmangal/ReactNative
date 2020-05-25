import React, {Component} from 'react';
import {
    View,
    Text,
} from "react-native";
import {styles} from "../styles/styles"
import {Card, Image} from "react-native-elements";
import Firebase from "../FirebaseConfig";


export default class Home extends Component {
    state = {
        image: '',
    }

    componentDidMount = () => {
        this.fetchPhoto().then()
    }

    async fetchPhoto() {
        const url = Firebase.storage().ref('PersonalPhoto.jpg');
        await url.getDownloadURL()
            .then(data => {
                this.setState({
                    image: data,
                })
            }).catch(e => {
                console.log(e);
            })
    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
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
                                    source={{uri: this.state.image}}
                                    style={{
                                        borderRadius: 25,
                                        borderColor: '#000',
                                        height: 50,
                                        width: 50,
                                    }}
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
                                    fontSize: 10,
                                }}>
                                    Description Text
                                </Text>
                            </View>
                        </View>
                    </Card>
                </View>
                <View/>
            </View>
        );
    }
}