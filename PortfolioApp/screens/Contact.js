import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from "react-native";
import {styles} from "../styles/styles"
import Firebase from "../FirebaseConfig";

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    onNameChange = (text) => {
        this.setState({
            name: text,
        })
    }

    onEmailChange = (text) => {
        this.setState({
            email: text,
        })
    }

    onMessageChange = (text) => {
        this.setState({
            message: text,
        })
    }

    submitHandler = () => {
        Firebase.database().ref('Messages/').push({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }).then(() => {
                this.setState({
                    message: '',
                });
                alert('Your Message has been sent')
            }
        ).catch((error) =>
            alert('Sorry,This happened: ' + error)
        )
    }
    // fetchdata = () => {
    //     Firebase.database().ref('Messages/').on('value', (snapshot) => {
    //         for (let i in snapshot.val()) {
    //             console.log(snapshot.val()[i])
    //         }
    //     });
    // }

    render() {
        return (
            <View style={styles.contact}>
                <Text style={styles.contactHeader}>
                    Contact Me
                </Text>
                <TextInput
                    style={styles.username}
                    placeholder={'Name'}
                    underlineColorAndroid="transparent"
                    value={this.state.name}
                    onChangeText={(text => this.onNameChange(text))}
                />
                <TextInput
                    style={styles.username}
                    placeholder={'Email'}
                    value={this.state.email}
                    underlineColorAndroid="transparent"
                    onChangeText={(text => this.onEmailChange(text))}
                />
                <TextInput
                    style={styles.message}
                    placeholder={'Message'}
                    value={this.state.message}
                    underlineColorAndroid="transparent"
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text => this.onMessageChange(text))}
                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.submitHandler()}
                >
                    <Text style={{
                        color: 'white',
                        textTransform: "uppercase"
                    }}>
                        Submit
                    </Text>

                </TouchableOpacity>
            </View>
        );
    }
}