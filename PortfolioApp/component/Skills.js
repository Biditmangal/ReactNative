import React, {Component} from 'react';
import {FlatList, Text, View,} from "react-native";
import {styles} from "../styles/styles"
import Firebase from "../FirebaseConfig";
import SkillCard from "./SkillCard";

export default class Skills extends Component {
    constructor() {
        super();
        this.state = {
            skills: [],
        };
    }

    componentDidMount() {
        Firebase.database().ref('Skills/').on('value', (snapshot) => {
            let skill = snapshot.val() ? snapshot.val() : {};
            let i;
            let data = [];
            for (i in skill) {
                data = [...data, skill[i]]
            }
            this.setState({
                skills: data,
            });
        });
    }

    dataToRender = () => {
        return [...this.state.skills];
    }

    // separator=()=>{
    //     return(
    //         <View
    //             style={{
    //                 margin:10,
    //                 borderWidth:1,
    //                 borderColor:'black',
    //             }}/>
    //     )
    // }

    render() {
        return (
            <View style={styles.SkillContainer}>
                <View style={styles.SkillHeader}>
                    <Text style={styles.SkillTitle}>Skills</Text>
                </View>
                <View style={styles.SkillBody}>
                    <View style={styles.SkillList}>
                        <FlatList
                            data={this.dataToRender()}
                            renderItem={({item}) => SkillCard(item)}
                            showsVerticalScrollIndicator={false}
                            // ItemSeparatorComponent={this.separator}
                        />
                    </View>
                </View>
            </View>
        );
    }
}