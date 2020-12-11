import firebase from "firebase/app";
import "firebase/database";

// firebase init - add your own config here
// const firebaseConfig = {
//   apiKey: "AIzaSyBEdIBhEBxtBVQOso_9G9ZQHyOdl76w01s",
//   authDomain: "vue-todo-list-firebase.firebaseapp.com",
//   databaseURL: "https://vue-todo-list-firebase.firebaseio.com",
//   projectId: "vue-todo-list-firebase",
//   storageBucket: "vue-todo-list-firebase.appspot.com",
//   messagingSenderId: "512959222284",
//   appId: "1:512959222284:web:60fbb77863b748dc089429"
// };

export const db = firebase
  .initializeApp({
    databaseURL: "https://vue-todo-list-firebase.firebaseio.com"
  })
  .database();
