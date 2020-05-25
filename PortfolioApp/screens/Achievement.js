import React, {Component} from 'react';
import {
    View,
    FlatList
} from "react-native";
import {styles} from "../styles/styles"
import Firebase from "../FirebaseConfig";
import AchievementCard from "../component/AchievementCard";

export default class Achievement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        Firebase.database().ref('Achievements/').on('value', (snapshot) => {
            let achievement = snapshot.val() ? snapshot.val() : [];
            let data = [];
            for (let i in achievement) {
                data = [...data, achievement[i]]
            }
            this.setState({
                list: data,
            });
        });
    }

    render() {
        return (
            <View style={styles.AchievementContainer}>
                <View style={styles.AchievementList}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={[...this.state.list]}
                        renderItem={({item}) =>AchievementCard(item)}
                    />
                </View>
            </View>
        );
    }
}