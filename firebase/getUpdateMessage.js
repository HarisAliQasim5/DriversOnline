import { onValue, ref } from "firebase/database";
import { database } from "./firebase";

export const getUpdateMessage = async (path, id, setCurrentLocation) => {
  const dbRef = ref(database, `${path}/${id}`);

  return onValue(dbRef, (snapshot) => {
    if (snapshot.exists()) {
      const newData = snapshot.val();
      console.log(newData);
      setCurrentLocation({ lat: newData.currentLat, lng: newData.currentLng });
      return newData;
    } else {
      return null;
    }
  });
};
