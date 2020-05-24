import React from "react";
import {
    Text,
    View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {styles} from "../styles/styles";
import {Card} from "react-native-elements";

const AchievementCard = (item) => {
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
                    <Text style={styles.AchievementText}>
                        {item.title}
                    </Text>
                    <View style={styles.DescriptionText}>
                        <Text style={{
                            opacity: 0.5,
                        }}>
                            {item.desc}
                        </Text>
                    </View>
                </View>
            </View>
        </Card>
    )
}

export default AchievementCard;