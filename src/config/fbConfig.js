import firebase from 'firebase/app';
import'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvnBFRYHr95QtdkfX7K8LUhKGS12O5QDo",
    authDomain: "karmele-bs.firebaseapp.com",
    databaseURL: "https://karmele-bs.firebaseio.com",
    projectId: "karmele-bs",
    storageBucket: "karmele-bs.appspot.com",
    messagingSenderId: "893320948804",
    appId: "1:893320948804:web:7d8a2ae7c5043d3a4da011",
    measurementId: "G-SMM1Q4MESM"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({ timestampsInSnapshots: true  });

  export default firebase;