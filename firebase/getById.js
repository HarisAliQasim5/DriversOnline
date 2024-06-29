import { doc, getDoc } from "firebase/firestore";
import { fireStore } from "./firebase";

const getById = (path , recordId) => {
  console.log(fireStore)
  return new Promise(async (resolve, reject) => {
    try {
      const docRef = doc(fireStore, `${path}/${recordId}`);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        // The document exists
        const data = docSnapshot.data();
        resolve({ id: docSnapshot.id, data });
      } else {
        // The document does not exist
        resolve(null);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export default getById;
