import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyApM70rhuZ6Q2RH_L-9GAo6zNy-KCQrqec",
    authDomain: "react-chat-app-d1cd7.firebaseapp.com",
    databaseURL: "https://react-chat-app-d1cd7.firebaseio.com",
    projectId: "react-chat-app-d1cd7",
    storageBucket: "react-chat-app-d1cd7.appspot.com",
    messagingSenderId: "518276336462",
    appId: "1:518276336462:web:847e799388724bab922c1f",
    measurementId: "G-EEXJB3Q1JD"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;