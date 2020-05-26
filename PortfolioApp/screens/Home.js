import React, {Component} from 'react';
import {
    View,
    Text, Dimensions,
} from "react-native";
import Firebase from "../FirebaseConfig";
import HomePhone from "../component/HomePhone";
import HomeBrowser from "../component/HomeBrowser";

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
                {
                    Dimensions.get('screen').width > 500 ?
                    <HomeBrowser image={this.state.image}/> :
                    <HomePhone image={this.state.image}/>
                }
            </View>
        );
    }
}