import { getFirestore, doc, getDoc } from "firebase/firestore";
import { firebaseApp } from "./firebase"; // Ensure you import your firebase app initialization
const firestore = getFirestore(firebaseApp);

const getDataById = async (collectionPath, documentId) => {
  const docRef = doc(firestore, collectionPath, documentId);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data(); // Return the document data
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export default getDataById;
