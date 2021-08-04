import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  //OBJETO DE FIREBASE
  apiKey: "AIzaSyBLrmgi1HkpLAddobg1GpwoLH-DsUqBRrc",
  authDomain: "horeb-54807.firebaseapp.com",
  projectId: "horeb-54807",
  storageBucket: "horeb-54807.appspot.com",
  messagingSenderId: "768829019100",
  appId: "1:768829019100:web:8df91d5cc2599c607b3519"
};

const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}

export const database = firebase.firestore();