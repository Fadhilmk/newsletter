// import necessary functions
import { doc, collection, addDoc } from "firebase/firestore";
import { firestore } from './../../../../firebaseConfig.js';

// Function to add a subcollection
export const addSubscriberToUser = async (userId, subscriberData) => {
  try {
    // Reference to the specific user document
    const userDocRef = doc(firestore, "users", userId);

    // Reference to the 'subscribers' subcollection
    const subscribersCollectionRef = collection(userDocRef, "subscribers");

    for(let subs of subscriberData){
      await addDoc(subscribersCollectionRef, subs);
    }
  } catch (error) {
    console.error("Error adding subscribers", error);
  }
};
