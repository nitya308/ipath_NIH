import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import apiKeys from '../services/keys.js';

firebase.initializeApp(apiKeys.firebaseConfig);

const firestore = firebase.firestore();

const users = firestore.collection('users');
const surveys = firestore.collection('survey-res');
const treatments = firestore.collection('treatments');
const clicks = firestore.collection('clicks');


// ================ USER FUNCTIONS =================

// Get all info about a user
export const getUserDoc = (userID) => {
  return users.doc(userID)
    .get()
    .then((doc) => {
      console.log(doc.id);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Favourite a treatment
export const updateFavTreatment = (userID, treatID) => {
  users.doc(userID).update({ 'bookmarked-treatments': firebase.firestore.FieldValue.arrayUnion(treatID) })
    .then(() => {
      console.log(`Added ${treatID} to user ${userID}'s list of fav treatments`);
    })
    .catch((error) => {
      console.log('Error updating goal: ', error);
    });
};

// Unfavourite a treatment
export const deleteFavTreatment = (userID, treatID) => {
  users.doc(userID).update({ 'bookmarked-treatments': firebase.firestore.FieldValue.arrayRemove(treatID) })
    .then(() => {
      console.log(`Removed ${treatID} from user ${userID}'s list of fav treatments`);
    })
    .catch((error) => {
      console.log('Error updating goal: ', error);
    });
};

// ================ SURVEY FUNCTIONS =================

// Get all survey results for a user
export const getUserSurveyRes = (userID) => {
  const userRef = users.doc(userID);
  return surveys.where('userID', '==', userRef).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

// Add a survey result
export const addSurveyRes = (userID, scores, date) => {
  surveys.add(
    {
      user: userID,
      scores: scores,
      totalScore: scores.reduce((sum, num) => sum + num, 0),
      date: date,
    }
  )
    .then((docRef) => {
      console.log(`Added survey ${docRef.id}`);
    })
    .catch((error) => {
      console.log(`Error adding new survey result: ${error}`);
    });
};

// ================ TREATMENT FUNCTIONS =================

// Get all treatments
export const getTreatments = () => {
  return treatments.get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id);
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });
};

// ================ ANALYTICS FUNCTIONS =================

// Add a click
export const addClick = (userID, elementID, timestamp) => {
  clicks.add({
    userID: userID,
    elementID: elementID,
    time: timestamp,
  })
    .then((docRef) => {
      console.log(`Added click with ID ${docRef.id} on ${elementID} for user ${userID}: `);
    })
    .catch((error) => {
      console.log('Error adding click to click schema: ', error);
    });
};