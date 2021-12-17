import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {seedDatabase} from '../seed';



const config = {
    apiKey: "AIzaSyAVrwHq6Gm0Cy0E-m8vyJ3zqsW269_JNkc",
    authDomain: "netflix-7a96e.firebaseapp.com",
    projectId: "netflix-7a96e",
    storageBucket: "netflix-7a96e.appspot.com",
    messagingSenderId: "556475463739",
    appId: "1:556475463739:web:7fd034925d031b1aa0441e"
};

const firebase = Firebase.initializeApp(config);

/*seedDatabase(firebase)*/

export { firebase };