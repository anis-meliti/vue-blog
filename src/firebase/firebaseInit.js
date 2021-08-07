import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyDQ3z13hXf3rhDSYN0b0cewe_TRITe1JLI',
    authDomain: 'mystical-sweep-302010.firebaseapp.com',
    databaseURL: 'https://mystical-sweep-302010.firebaseio.com',
    projectId: 'mystical-sweep-302010',
    storageBucket: 'mystical-sweep-302010.appspot.com',
    messagingSenderId: '792064484823',
    appId: '1:792064484823:web:bca5e6be381c11ebd6d792',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {
    timestamp
}
export default firebaseApp.firestore();