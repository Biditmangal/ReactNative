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
    render() {
        return (
            <View style={styles.SkillContainer}>
                <View style={styles.SkillHeader}>
                    <Text style={styles.SkillTitle}>Skills</Text>
                </View>
                <View style={styles.SkillBody}>
                    <View style={styles.SkillList}>
                        <FlatList
                            data={[
                                {title: 'Web', score: '0.5', name: 'adjust'},
                                {title: 'Android', score: '0.6', name: 'account-star'},
                                {title: 'IOS', score: '0.4', name: 'adjust'},
                                {title: 'Python', score: '0.8', name: 'account-star'},
                                {title: 'React', score: '0.3', name: 'adjust'},
                                {title: 'Native', score: '0.9', name: 'account-star'},
                                {title: 'Web', score: '0.5', name: 'adjust'},
                                {title: 'Android', score: '0.6', name: 'adjust'},
                                {title: 'IOS', score: '0.4', name: 'account-star'},
                                {title: 'Python', score: '0.8', name: 'adjust'},
                                {title: 'React', score: '0.3', name: 'account-star'},
                                {title: 'Native', score: '0.9', name: 'adjust'},
                            ]}
                            renderItem={({item}) =>
                                // <View style={styles.Skill}>
                                <Card>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        marginTop: 10,
                                        alignItems: 'center',
                                    }}>
                                        <View style={{
                                            flex: 1,
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
                                // </View>
                            }
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        );
    }
}