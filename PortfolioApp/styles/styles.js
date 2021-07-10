import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 36,
		marginBottom: 16,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#fff",
		padding: 10,
		marginTop: 10,
	},
	container: {
		marginBottom: 16,
		textTransform: "uppercase",
		alignItems: "center",
	},
	ProjectBody: {
		flex: 1,
		margin: 3,
		height: 10,
		padding: 5,
		justifyContent: "center",
	},
	ProjectList: {
		flex: 1,
		padding: 20,
		justifyContent: "center",
	},
	ProjectPanel: {
		margin: 10,
		borderRadius: 10,
		height: 10,
	},
	ProjectPanelText: {
		margin: 8,
	},
	AchievementContainer: {
		flex: 1,
		margin: 3,
		marginBottom: 20,
		height: 50,
		borderRadius: 2,
		padding: 5,
		justifyContent: "center",
	},
	AchievementList: {
		flex: 1,
		padding: 20,
		justifyContent: "flex-start",
	},
	AchievementText: {
		textTransform: "uppercase",
		marginBottom: 5,
	},
	DescriptionText: {
		marginBottom: 10,
	},
	SkillContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	SkillHeader: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	SkillTitle: {
		fontSize: 36,
	},
	SkillBody: {
		flex: 3,
		margin: 10,
		// marginBottom: 20,
		// height: 50,
		backgroundColor: "white",
		borderRadius: 2,
		padding: 5,
		justifyContent: "center",
		width: "90%",
	},
	SkillList: {
		flex: 1,
		padding: 20,
		justifyContent: "flex-start",
	},
	SkillText: {
		fontSize: 16,
		marginBottom: 5,
	},
	ProgressView: {
		marginBottom: 10,
	},
	contact: {
		flex: 1,
		marginLeft: 10,
		borderColor: "black",
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
	},
	contactHeader: {
		justifyContent: "center",
		fontSize: 30,
		marginBottom: 20,
	},
	username: {
		marginTop: 10,
		height: 40,
		width: 350,
		borderWidth: 1,
		borderColor: "#000",
		borderRadius: 2,
		padding: 10,
	},
	message: {
		marginTop: 10,
		height: "30%",
		width: 350,
		borderWidth: 1,
		borderColor: "#000",
		borderRadius: 2,
		padding: 5,
	},
	submitButton: {
		marginTop: 20,
		width: 200,
		height: 40,
		borderRadius: 20,
		borderColor: "#000",
		borderWidth: 0.5,
		backgroundColor: "black",
		justifyContent: "center",
		alignItems: "center",
	},
});
