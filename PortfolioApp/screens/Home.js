import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import Firebase from "../FirebaseConfig";
import HomePhone from "../component/HomePhone";
import HomeBrowser from "../component/HomeBrowser";

const Home = (props) => {
	const [image, setImage] = useState(null);

	useEffect(() => {
		fetchPhoto();
	}, []);

	const fetchPhoto = async () => {
		const url = Firebase.storage().ref("PersonalPhoto.jpg");
		await url
			.getDownloadURL()
			.then((data) => {
				setImage(data);
			})
			.catch((e) => {
				console.error(e);
			});
	};

	const navigateScreen = (name) => {
		return props.navigation.navigate(name);
	};

	return (
		<>
			{Dimensions.get("screen").width > 500 ? (
				<HomeBrowser image={image} click={navigateScreen.bind(this)} />
			) : (
				<HomePhone image={image} />
			)}
		</>
	);
};

export default Home;
