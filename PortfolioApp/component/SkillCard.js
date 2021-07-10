import React from "react";
import {
    Text,
    View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {styles} from "../styles/styles";
import ProgressBar from "react-native-progress-fixed/Bar";
import {Card} from "react-native-elements";


const SkillCard = (item) => {
    return (
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
export default SkillCard;