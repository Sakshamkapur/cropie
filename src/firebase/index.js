import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAmBPSweNL9V83wOth9iWdHSllYjs-kKZw",
    authDomain: "imager-f5919.firebaseapp.com",
    databaseURL: "https://imager-f5919.firebaseio.com",
    projectId: "imager-f5919",
    storageBucket: "imager-f5919.appspot.com",
    messagingSenderId: "135431153748",
    appId: "1:135431153748:web:5f9df7c8696269b2ae25c1",
    measurementId: "G-3NBYMSGWCB"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}