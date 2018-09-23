import Firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAEbY2hSNtmkGkTGCj10t28OqL-cHbuBrg",
  authDomain: "danoswalt-161b1.firebaseapp.com",
  databaseURL: "https://danoswalt-161b1.firebaseio.com",
  projectId: "danoswalt-161b1",
  storageBucket: "danoswalt-161b1.appspot.com",
  messagingSenderId: "1025649020884"
};

const firebaseApp = Firebase.initializeApp(config)
const settings = {
  timestampsInSnapshots: true
}
firebaseApp.firestore().settings(settings)
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { db, storage }
