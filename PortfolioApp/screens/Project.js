import React, {Component} from 'react';
import {
    View,
    FlatList,
} from "react-native";
import {styles} from "../styles/styles";
import ProjectPanel from "../component/ProjectPanel";
import Firebase from "../FirebaseConfig";


export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount = () => {
        Firebase.database().ref('Projects/').on('value', (snapshot) => {
            let project = snapshot.val() ? snapshot.val() : [];
            let i;
            let data = [];
            for (i in project) {
                data = [...data, project[i]]
            }
            this.setState({
                projects: data,
            })
        });
    }


    render() {
        return (
            <View style={styles.ProjectBody}>
                <View style={styles.ProjectList}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={[...this.state.projects]}
                        renderItem={({item}) => ProjectPanel(item)}
                        // keyExtractor={(item)=>{item.title}}
                    />
                </View>
            </View>
        );
    }
}