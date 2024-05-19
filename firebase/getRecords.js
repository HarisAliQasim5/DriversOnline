import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { firebaseApp } from "./firebase"; // Ensure you import your firebase app initialization

const firestore = getFirestore(firebaseApp);

const getRecords = async (path, filterObject = null) => {
  try {
    const collectionRef = collection(firestore, path);
    let queryRef = collectionRef;

    // If a filter object is provided, apply filters
    if (filterObject) {
      // Loop through the filter object and apply filters
      Object.entries(filterObject).forEach(([key, value]) => {
        queryRef = query(queryRef, where(key, "==", value));
      });
    }

    const querySnapshot = await getDocs(queryRef);
    const records = [];
    querySnapshot.forEach((doc) => {
      records.push({ key: doc.id, data: doc.data() });
    });
    return records;
  } catch (error) {
    throw new Error("Error fetching records: " + error.message);
  }
};

export default getRecords;
