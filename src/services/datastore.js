import 'expo-firestore-offline-persistence'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import Constants from 'expo-constants';
// import apiKeys from '../services/keys.js';


const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

firestore.enablePersistence()
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });

const users = firestore.collection('users');
const surveys = firestore.collection('survey-res');
const treatments = firestore.collection('treatments');
const clicks = firestore.collection('clicks');


// ================ USER FUNCTIONS =================

// Get all info about a user
export const getUserDoc = (userID) => {
  let doc = users.doc(userID).get()
    .catch((error) => {
      console.log(error);
    });
  return doc;
};

export function getTreatmentById(treatID) {
  return treatments.doc(treatID).get();
}
// Favourite a treatment
export function updateFavTreatment(userID, treatID) {
  return users.doc(userID).update({ 'bookmarked-treatments': firebase.firestore.FieldValue.arrayUnion(treatID) });
};

// Unfavourite a treatment
export function deleteFavTreatment(userID, treatID) {
  users.doc(userID).update({ 'bookmarked-treatments': firebase.firestore.FieldValue.arrayRemove(treatID) })
    .then(() => {
      console.log(`Removed ${treatID} from user ${userID}'s list of fav treatments`);
    })
    .catch((error) => {
      console.log('Error updating goal: ', error);
    });
};

export function createUser(uid, email, firstName) {

  const tutorial_views = {
    "overview": 0,
    "comapre": 0,
    "filter": 0,
    "cards": 0,
  }

  users.doc(uid).set({
    email: email,
    "bookmarked-treatments": [],
    "tutorial_views": tutorial_views,
    "lastSurveyed": "",
    "firstName": firstName,

  }).catch((error) => {
    console.log('Error creating user', error);
  });
}
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
      user: 'users/' + userID,
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
    })


};

export const updateLastSurveyed = (userID, date) => {
  users.doc(userID).update({ lastSurveyed: date.toISOString() })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateFirstName = (userID, firstName) => {
  users.doc(userID).update({ firstName: firstName })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.log(error);
    });
};

// ================ TREATMENT FUNCTIONS =================

// Get all treatments
export function getTreatments() {
  return treatments.get()
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

export default firebase;


// ================ TUTORIALVIEW FUNCTIONS =================

// Favourite a treatment
export function updatePageView(userID, pageID) {
  console.log(`attempting update of ${userID} \'s page views to add ${pageID}`);
  console.log(userID);
  return users.doc(userID).update({ 'tutorial_views': { pageID: 1 } })
    .then(() => {
      console.log(`Added ${pageID} to user ${userID}'s list of page views`);
    })
    .catch((error) => {
      console.log('Error updating goal: ', error);
    });
};