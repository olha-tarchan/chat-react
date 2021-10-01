import firebase  from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyAHDBrW8mfXOPT4cDgH8Fur8u8vg2XNa3M",
    authDomain: "react-chat-fb563.firebaseapp.com",
    projectId: "react-chat-fb563",
    storageBucket: "react-chat-fb563.appspot.com",
    messagingSenderId: "508873462994",
    appId: "1:508873462994:web:53c83ef1f5b9944feec90b",
    measurementId: "G-S8CDZ3DREJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export {firebase};