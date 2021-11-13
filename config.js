import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyDwZK-PcnOpgLuT4QfAibS5MXZp1cFMJgA",
  authDomain: "elibraryapp-49667.firebaseapp.com",
  projectId: "elibraryapp-49667",
  storageBucket: "elibraryapp-49667.appspot.com",
  messagingSenderId: "503028181837",
  appId: "1:503028181837:web:f2c13486aa46d816576504"
};

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();