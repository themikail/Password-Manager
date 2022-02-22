import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDXH0P0F4vYmLku5W6gAKdJQWzU9PYv4AQ",
  authDomain: "karpusec.firebaseapp.com",
  projectId: "karpusec",
  storageBucket: "karpusec.appspot.com",
  messagingSenderId: "826775503218",
  appId: "1:826775503218:web:1730d394de4a1e66dfddeb",
  measurementId: "G-4BT2WFKHRJ",
};
// Initialize Firebase
const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
