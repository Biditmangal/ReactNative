import React, { useState } from "react";
import { FlatList, Text, View, TextInput, StyleSheet } from "react-native";
// import { styles } from "../styles/styles";
// import Firebase from "../FirebaseConfig";
// import SkillCard from "../component/SkillCard";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// export default class Skills extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             skills: [],
//         };
//     }

//     componentDidMount = () => {
//         Firebase.database().ref('Skills/').on('value', (snapshot) => {
//             let skill = snapshot.val() ? snapshot.val() : [];
//             let i;
//             let data = [];
//             for (i in skill) {
//                 data = [...data, skill[i]]
//             }
//             this.setState({
//                 skills: data,
//             });
//         });
//     }

//     // separator=()=>{
//     //     return(
//     //         <View
//     //             style={{
//     //                 margin:10,
//     //                 borderWidth:1,
//     //                 borderColor:'black',
//     //             }}/>
//     //     )
//     // }

//     render() {
//         return (
//             <View style={styles.SkillContainer}>
//                 <View style={styles.SkillHeader}>
//                     <Text style={styles.SkillTitle}>Skills</Text>
//                 </View>
//                 <View style={styles.SkillBody}>
//                     <View style={styles.SkillList}>
//                         <FlatList
//                             data={[...this.state.skills]}
//                             renderItem={({item}) => SkillCard(item)}
//                             showsVerticalScrollIndicator={false}
//                             keyExtractor={(item)=>{`${item.title}`}}
//                             // ItemSeparatorComponent={this.separator}
//                         />
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

const Skills = () => {
	// const [data, setData] = useState({
	// 	question: "Employee Details",
	// 	column2_title: "Employee Size",
	// 	metadata: [
	// 		{
	// 			column1: "2016-2017",
	// 			column2: null,
	// 		},
	// 		{
	// 			column1: "2017-2018",
	// 			column2: null,
	// 		},
	// 	],
	// });

	const data = {
		question: "Employee Details",
		column2_title: "Employee Size",
		metadata: [
			{
				column1: "2016-2017",
				column2: null,
			},
			{
				column1: "2017-2018",
				column2: null,
			},
			{
				column1: "2018-2019",
				column2: null,
			},
			{
				column1: "2019-2020",
				column2: null,
			},
			{
				column1: "2020-2021",
				column2: null,
			},
		],
	};

	const onValueChange = (item, text) => {
		item.column2 = text;
		console.log(item.column2);
	};

	return (
		<View
			style={{
				flex: 1,
                marginLeft:5,
			}}>
			<View>
				<Text style={style.title}>{data.question}</Text>
			</View>
			<View style={style.list}>
				<FlatList
					data={data.metadata}
					renderItem={({ item }) => (
						<View style={style.row}>
							<Text style={style.columnLeft}>{item.column1}</Text>
							<TextInput
								style={style.textInput}
								placeholder={data.column2_title}
								value={item.column2}
								underlineColorAndroid="transparent"
								keyboardType="number-pad"
								onChangeText={(text) => {
									onValueChange(item, text);
								}}
							/>
						</View>
					)}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item) => {
						`${item.column1}`;
					}}
					// ItemSeparatorComponent={separator}
				/>
			</View>
		</View>
	);
};

export default Skills;

const style = StyleSheet.create({
	list: {
		// borderColor: "red",
		// borderWidth: 2,
	},
	title: {
		fontSize: hp("3%"),
		fontWeight: "900",
		paddingBottom: hp("1%"),
		alignSelf: "auto",
	},
	row: {
		flex: 1,
		flexDirection: "row",
		marginTop: 10,
		alignItems: "center",
	},
	columnLeft: {
		fontSize: hp("2%"),
		fontWeight: "600",
		paddingBottom: hp("1%"),
		marginHorizontal: hp("1%"),
	},
	textInput: {
		paddingHorizontal: wp("3%"),
		paddingVertical: hp("2%"),
		backgroundColor: "#F5F5F5",
	},
});
