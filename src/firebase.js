import firebase from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyD4PhquD0B3L0tpDk1CEYPq77Uew2sqeWw",
//   authDomain: "nwitter-c3b00.firebaseapp.com",
//   projectId: "nwitter-c3b00",
//   storageBucket: "nwitter-c3b00.appspot.com",
//   messagingSenderId: "128774256035",
//   appId: "1:128774256035:web:901aaa911d86e2e6635616",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export default firebase.initializeApp(firebaseConfig);
