import firebase from "firebase";
import { User } from "./config/GLOBALS";

const initDatabase = () => {
  firebase
    .database()
    .ref("/users/" + User.id)
    .set({
      username: User.name
    });
};

export const init = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyAO6YxPKJQgHg9WHJBEyPsF7yLyZzRuniY",
    authDomain: "mirrormirror-4f6b1.firebaseapp.com",
    databaseURL: "https://mirrormirror-4f6b1.firebaseio.com",
    projectId: "mirrormirror-4f6b1",
    storageBucket: "mirrormirror-4f6b1.appspot.com",
    messagingSenderId: "620134518405",
    appId: "1:620134518405:web:98d7f3284de60496e4e3ec",
    measurementId: "G-DTB5ZDRVZ9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  initDatabase();
};
