import firebase from 'firebase';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAa6f41VR7qmU693qXNeXqB--Fxyi2Tuos",
    authDomain: "newsletter-app-db9fc.firebaseapp.com",
    databaseURL: "https://newsletter-app-db9fc.firebaseio.com",
    projectId: "newsletter-app-db9fc",
    storageBucket: "newsletter-app-db9fc.appspot.com",
    messagingSenderId: "381110441963",
    appId: "1:381110441963:web:23e667394174eb38296bae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database()