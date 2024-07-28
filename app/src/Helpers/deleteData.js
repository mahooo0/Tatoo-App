import{db, firestore}from '../lib/firebase'
export async function deleteData(col, id) {
  try {
    await db.collection(col).doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  } catch (err) {
    console.log(err);
  }
}

// import { db } from "configs/firebase";
// import { FirestoreError, deleteDoc, doc } from "firebase/firestore";

// export async function deleteData(col, id) {
//   try {
//     const productDocRef = doc(db, col, id);

//     await deleteDoc(productDocRef);

//   } catch (err) {
//     console.log(err);
//   }
// }
