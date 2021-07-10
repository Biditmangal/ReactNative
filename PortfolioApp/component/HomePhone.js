import React from "react";
import { Dimensions, Text, View, Image,Linking } from "react-native";
import { IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomePhone = (props) => {
	return (
		<View
			style={{
				flex: 1,
				margin: 20,
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 6,
				},
				shadowOpacity: 0.51,
				shadowRadius: 11,

				elevation: 15,
				borderRadius: 10,
			}}>
			<View
				style={{
					height: Dimensions.get("screen").height / 4,
				}}>
				<Image
					source={{ uri: props.image }}
					style={{
						flex: 1,
						justifyContent: "center",
						width: "100%",
						height: "100%",
						borderTopEndRadius:10,
						borderTopLeftRadius:10,
					}}
					resizeMode={"cover"}
				/>
			</View>
			<View>
				<Image
					source={{ uri: props.image }}
					style={{
						width: 130,
						height: 130,
						borderRadius: 63,
						borderWidth: 4,
						borderColor: "rgb(0,180,200)",
						marginBottom: 10,
						alignSelf: "center",
						position: "absolute",
						marginTop: -65,
					}}
					resizeMode={"cover"}
				/>

				<View
					style={{
						flex: 1,
						marginTop: 65,
						alignItems: "center",
					}}>
					<Text
						style={{
							fontWeight: "bold",
							fontSize: 36,
						}}>
						Bidit Mangal
					</Text>
					<Text
						style={{
							opacity: 0.5,
							fontSize: 20,
						}}>
						Coder | Developer
					</Text>

					<View
						style={{
							flex: 1,
							marginTop: 30,
							margin: 10,
							width: Dimensions.get("screen").width / 1.2,
							height: Dimensions.get("window").height / 10,
						}}>
						<View
							style={{
								flex: 1,
								alignItems: "center",
								borderBottomColor: "gray",
								borderBottomWidth: 2,
								marginLeft: 10,
								marginRight: 10,
								justifyContent: "center",
							}}>
							<Text style={{ fontSize: 20, marginBottom: 2 }}>
								ABOUT
							</Text>
						</View>
						<View
							style={{
								flex: 3,
								marginTop: 10,
								marginLeft: 10,
								marginRight: 10,
							}}>
							<Text>
								Cras id neque vel eros molestie feugiat eget nec
								nisi.{"\n"}
								Sed rhoncus magna a nisl vulputate, eget
								dapibus.{"\n"}
							</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
							margin: 10,
							width: Dimensions.get("screen").width / 1.2,
							height: Dimensions.get("window").height / 10,
						}}>
						<View
							style={{
								flex: 1,
								alignItems: "center",
								borderBottomColor: "gray",
								borderBottomWidth: 2,
								marginLeft: 10,
								marginRight: 10,
								justifyContent: "center",
							}}>
							<Text style={{ fontSize: 20, marginBottom: 2 }}>
								EDUCATION
							</Text>
						</View>
						<View
							style={{
								flex: 3,
								marginTop: 10,
								marginLeft: 10,
								marginRight: 10,
							}}>
							<Text>
								Cras id neque vel eros molestie feugiat eget nec
								nisi.{"\n"}
								Sed rhoncus magna a nisl vulputate, eget
								dapibus.{"\n"}
							</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
							margin: 10,
							width: Dimensions.get("screen").width / 1.2,
							height: Dimensions.get("window").height / 10 + 20,
						}}>
						<View
							style={{
								flex: 1,
								alignItems: "center",
								borderBottomColor: "gray",
								borderBottomWidth: 2,
								marginLeft: 10,
								marginRight: 10,
								justifyContent: "center",
							}}>
							<Text style={{ fontSize: 20, marginBottom: 2 }}>
								HOBBIES
							</Text>
						</View>
						<View
							style={{
								flex: 3,
							}}></View>
					</View>
					<View
						style={{
							flexDirection: "row",
							marginBottom: Dimensions.get("window").height / 50,
							justifyContent: "flex-end",
						}}>
						<IconButton
							icon={() => (
								<Icon
									style={{ color: "rgb(0,180,200)" }}
									name={"twitter"}
									size={30}
								/>
							)}
							onPress={() =>
								Linking.openURL(
									"https://twitter.com/Biditmangal18"
								)
							}
						/>
						<IconButton
							icon={() => (
								<Icon
									style={{ color: "rgb(0,180,200)" }}
									name={"instagram"}
									size={30}
								/>
							)}
							onPress={() =>
								Linking.openURL(
									"https://www.instagram.com/bidit.exe/"
								)
							}
						/>
						<IconButton
							icon={() => (
								<Icon
									style={{ color: "rgb(0,180,200)" }}
									name={"linkedin"}
									size={30}
								/>
							)}
							onPress={() =>
								Linking.openURL(
									"https://www.linkedin.com/in/bidit-mangal/"
								)
							}
						/>
						<IconButton
							icon={() => (
								<Icon
									style={{ color: "rgb(0,180,200)" }}
									name={"facebook"}
									size={30}
								/>
							)}
							onPress={() =>
								Linking.openURL(
									"https://www.facebook.com/biditmangal"
								)
							}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default HomePhone;
