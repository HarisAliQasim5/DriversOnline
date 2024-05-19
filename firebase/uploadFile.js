import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Initialize Firebase Storage
const storage = getStorage();

// Function to upload a File object to Firebase Storage
const uploadFileToFirebase = async (file, firebasePath) => {
  try {
    // Get the file name from the File object
    const fileName = file.name;
    // Create a storage reference with the specified Firebase path and file name
    const storageRef = ref(storage, `${firebasePath}/${fileName}`);

    // Upload the File object to Firebase Storage
    await uploadBytes(storageRef, file);

    // Get the download URL for the uploaded file
    const downloadURL = await getDownloadURL(storageRef);

    // Return the download URL
    return downloadURL;
  } catch (error) {
    throw error;
  }
};

export default uploadFileToFirebase;
