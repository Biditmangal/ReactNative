import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
} from "react-native";
import ProgressBar from 'react-native-progress-fixed/Bar';
import {Card} from "react-native-elements";
import {styles} from "../styles/styles"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default class Skills extends Component {
    state = {
        skills: [],
    }

    dataToRender = () => {
        let Skills = [...this.state.skills];

        let data = [
            {id: 1, title: 'Web', score: 0.5, name: 'adjust'},
            {id: 2, title: 'Android', score: 0.6, name: 'account-star'},
            {id: 3, title: 'IOS', score: 0.4, name: 'adjust'},
            {id: 4, title: 'Python', score: 0.8, name: 'account-star'},
            {id: 5, title: 'React', score: 0.3, name: 'adjust'},
            {id: 6, title: 'Native', score: 0.9, name: 'account-star'},
            {id: 7, title: 'Web', score: 0.5, name: 'adjust'},
            {id: 8, title: 'IOS', score: 0.4, name: 'account-star'},
            {id: 9, title: 'Python', score: 0.8, name: 'adjust'},
            {id: 10, title: 'React', score: 0.3, name: 'account-star'},
            {id: 11, title: 'Native', score: 0.9, name: 'adjust'},
        ];
        Skills = [...data]
        return Skills;
    }

    renderListItem = (item) => {
        return(
            <Card>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: 10,
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                        marginRight: 10,
                        alignItems: 'center'
                    }}>
                        <Icon style={{color: 'black',}} size={27} name={item.name}/>
                    </View>
                    <View style={{
                        flex: 8,
                    }}>
                        <Text style={styles.SkillText}>
                            {item.title}
                        </Text>
                        <View style={styles.ProgressView}>
                            <ProgressBar
                                progress={item.score}
                                color={'black'}
                            />
                        </View>
                    </View>
                </View>
            </Card>
        )
    }

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
                            renderItem={({item}) =>this.renderListItem(item)}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        );
    }
}