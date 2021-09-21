// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1X7sPwfSjDStLZMervVS3tHtSLj5oX_I",
  authDomain: "f1-project-db.firebaseapp.com",
  projectId: "f1-project-db",
  storageBucket: "f1-project-db.appspot.com",
  messagingSenderId: "319616407379",
  appId: "1:319616407379:web:3ac8a9c59080480dbcb3a6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

export const fetchDriverInfo = () => {
  return db
    .collection("drivers")
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;

        return {
          id,
          ...data,
        };
      });
    });
};

/* export const fetchDriverProfile = async (id) => {
  const document = await db
    .collection("drivers")
    .where("name", "==", true)
    .get();

  console.log(document.id);
}; */

export const fetchTeamsInfo = () => {
  return db
    .collection("teams")
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;

        return {
          id,
          ...data,
        };
      });
    });
};
