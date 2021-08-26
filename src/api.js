export const getDrivers = async () => {
  try {
    const API_URL = `https://f1-web-app-bb3da-default-rtdb.firebaseio.com/drivers.json`;
    const resp = await fetch(API_URL);
    const format = await resp.json();
    const data = await format["-MhLheQlUFk_j8etAbHK"].drivers;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTeams = async () => {
  try {
    const API_URL = `https://f1-web-app-bb3da-default-rtdb.firebaseio.com/teams.json`;
    const resp = await fetch(API_URL);
    const json = await resp.json();
    const data = await json["-MhOdS8-ANvGk6b5YyvV"].teams;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCircuits = async () => {
  try {
    const API_URL = `https://f1-web-app-bb3da-default-rtdb.firebaseio.com/circuits.json`;
    const resp = await fetch(API_URL);
    const json = await resp.json();
    const data = await json["-MhPhwUJmLI-2uTbALBV"].circuits;
    return data;
  } catch (error) {
    console.log(error);
  }
};
