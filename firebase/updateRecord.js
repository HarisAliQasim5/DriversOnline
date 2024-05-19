import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { firebaseApp } from "./firebase"; // Ensure you import your firebase app initialization

const firestore = getFirestore(firebaseApp);

// Function to update a specific record in Firestore
const updateRecord = async (path, recordId, newData) => {
  const docRef = doc(firestore, path, recordId);

  try {
    await updateDoc(docRef, newData);
    return true;
  } catch (error) {
    console.error("Error updating record:", error);
    return false;
  }
};

export default updateRecord;
