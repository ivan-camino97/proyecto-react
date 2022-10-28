import { addDoc, collection, getFirestore } from "firebase/firestore"

export const createOrder = (newOrder) => {
const database = getFirestore()

const collectionReference = collection(database, 'orders')

return addDoc(collectionReference, newOrder)
.then((snapshot) => console.log(snapshot))
.catch((error) => console.warn(error))
}