import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAvyCsU4Foz5v3vFhH7el1n9jdPp_uJJig",
    authDomain: "tic-tac-toe-98bbc.firebaseapp.com",
    projectId: "tic-tac-toe-98bbc",
    storageBucket: "tic-tac-toe-98bbc.appspot.com",
    messagingSenderId: "383667568778",
    appId: "1:383667568778:web:dba8a804613777b70ced73"
};

firebase.initializeApp(config);

export {firebase}

// i will get this config wherever i need to firebase 