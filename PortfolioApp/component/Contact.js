import React, {Component} from 'react';
import {View,Text,TouchableOpacity,TextInput} from "react-native";
import {styles} from "../styles/styles"

export default class Contact extends Component{
    myfunc(){
        alert('HelloWorld');
    }
    render() {
        return(
            <View style={styles.contact}>
                <Text style={styles.contactHeader}>
                    Contact Me
                </Text>
                <TextInput
                    style={styles.username}
                    placeholder={'Name'}
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    style={styles.username}
                    placeholder={'Email'}
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    style={styles.message}
                    placeholder={'Message'}
                    underlineColorAndroid="transparent"
                    multiline={true}
                    numberOfLines={4}
                    textAlignVertical={"top"}
                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.myfunc}
                    >
                    <Text style={{
                        color:'white',
                        textTransform: "uppercase"
                    }}>
                        Submit
                    </Text>

                </TouchableOpacity>
            </View>
        );
    }
}