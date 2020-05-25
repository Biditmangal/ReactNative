import React from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDkedJPadEa1yWX_gwXMvR45oBUiWvh9no",
    authDomain: "portfolioapp-e8c63.firebaseapp.com",
    databaseURL: "https://portfolioapp-e8c63.firebaseio.com",
    projectId: "portfolioapp-e8c63",
    storageBucket: "portfolioapp-e8c63.appspot.com",
    messagingSenderId: "583969798672",
    appId: "1:583969798672:web:e2edf32b022a1914f32895",
    measurementId: "G-Z95BFP8V8F"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;