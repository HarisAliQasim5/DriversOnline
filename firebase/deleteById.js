import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { firebaseApp } from "./firebase"; // Ensure you import your firebase app initialization

const firestore = getFirestore(firebaseApp);

const deleteById = async (collectionPath, documentId) => {
  const docRef = doc(firestore, collectionPath, documentId);

  try {
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export default deleteById;
