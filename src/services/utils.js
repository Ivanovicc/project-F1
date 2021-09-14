import db from "./firebaseConfig";

export const getDrivers = async () => {
  db.collection("drivers").onSnapshot((querySnapshot) => {
    const drivers = [];
    querySnapshot.forEach((doc) => {
      drivers.push(doc.data());
    });
    return drivers;
  });
};
