import { fireStore } from "./firebase";
import { collection, addDoc } from "firebase/firestore"

const createBooking = async (bookingData) => {
  try {
    const docRef = await addDoc(collection(fireStore, "booking"), bookingData);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Could not create new vehicle");
  }
};

export { createBooking };