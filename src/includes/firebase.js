import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA5-BAaGQzInm5R_11s8yqYzYNI4WL5YNE',
  authDomain: 'music-963f7.firebaseapp.com',
  projectId: 'music-963f7',
  storageBucket: 'music-963f7.appspot.com',
  messagingSenderId: '71766799460',
  appId: '1:71766799460:web:05d6c9aa822ed36722db71',
  measurementId: 'G-GQKGS60E74',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
