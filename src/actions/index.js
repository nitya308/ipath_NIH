import * as db from '../services/datastore';
export const ActionTypes = {
    SAVE_TREATMENT: 'SAVE_TREATMENT',
    DELETE_SAVED_TREATMENT: 'DELETE_SAVED_TREATMENT',
    FETCH_SAVED_TREATMENTS: 'FETCH_SAVED_TREATMENTS',
    FETCH_TREATMENTS: 'FETCH_TREATMENTS',
    ERROR_TREATMENTS: 'ERROR_TREATMENTS',
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    SAVE_PAGEVIEW: 'SAVE_PAGEVIEW',
    ERROR_PAGEVIEW: 'ERROR_PAGEVIEW',
    FETCH_LAST_SURVEYED: 'FETCH_LAST_SURVEYED',
    UPDATE_LAST_SURVEYED: 'UPDATE_LAST_SURVEYED',
    ERROR_LAST_SURVEYED: 'ERROR_LAST_SURVEYED',
    FETCH_FIRST_NAME: 'FETCH_FIRST_NAME',
    UPDATE_FIRST_NAME: 'UPDATE_FIRST_NAME',
    ERROR_FIRST_NAME: 'ERROR_FIRST_NAME',
};


export function saveTreatment(userID, treatID) {
    return (dispatch) => {
        db.updateFavTreatment(userID, treatID).then((response) => {
            dispatch({ type: ActionTypes.SAVE_TREATMENT, payload: treatID });
        }).catch((error) => {
            dispatch({ type: ActionTypes.ERROR_TREATMENTS, error });
        })
    }
}

export function savePageView(userID, pageID) {
    return (dispatch) => {
        db.updatePageView(userID, pageID).then((response) => {
            dispatch({ type: ActionTypes.SAVE_PAGEVIEW, payload: treatID });
        }).catch((error) => {
            dispatch({ type: ActionTypes.ERROR_PAGEVIEW, error });
        })
    }
}

export function deleteSavedTreatment(userID, treatID) {
    return (dispatch) => {
        db.deleteFavTreatment(userID, treatID);
        dispatch({ type: ActionTypes.DELETE_SAVED_TREATMENT, payload: treatID })

    }
}
export function fetchTreatments() {
    return (dispatch) => {
        db.getTreatments().then((response) => {
            const list = [];
            response.forEach((doc) => {
                list.push({ id: doc.id, data: doc.data() });
            })
            dispatch({ type: ActionTypes.FETCH_TREATMENTS, payload: list });
        }).catch((error) => {
            dispatch({ type: ActionTypes.ERROR_TREATMENTS, error });
        })
    }
}

export function fetchSavedTreatments(userID) {
    return (dispatch) => {
        db.getUserDoc(userID).then((response) => {
            dispatch({ type: ActionTypes.FETCH_SAVED_TREATMENTS, payload: response.data()["bookmarked-treatments"] })
        }).catch((error) => {
            dispatch({ type: ActionTypes.ERROR_TREATMENTS, error });
        })
    }
}


export function loginUser({ email, id }) {
    return (dispatch) => {
        dispatch({ type: ActionTypes.LOGIN_USER, payload: { email: email, id: id } });
    }
}

export function logoutUser() {
    return (dispatch) => {
        dispatch({ type: ActionTypes.LOGOUT_USER });
    }
}


// ACTIONS FOR FETCHING THE LAST-SURVEYED INFO FOR A USER

export function fetchLastSurveyed(userID) {
    return (dispatch) => {
        db.getUserDoc(userID).then((response) => {
            // console.log('PRINTING lastSurveyed from actions/index:\n', response.data()["lastSurveyed"])
            dispatch({ type: ActionTypes.FETCH_LAST_SURVEYED, payload: response.data()["lastSurveyed"] })
        }).catch((error) => {
            dispatch({ type: ActionTypes.ERROR_LAST_SURVEYED, error });
        })
    }
}

export function saveLastSurveyed(userID, date) {
    return (dispatch) => {
        db.updateLastSurveyed(userID, date).then((response) => {
            console.log('response in save last surveyed', response);
            dispatch({ type: ActionTypes.UPDATE_LAST_SURVEYED, payload: date });
        }).catch((error) => {
            dispatch({ type: ActionTypes.ERROR_LAST_SURVEYED, error });
        })
    }
}

export function fetchFirstName(userID) {
  return (dispatch) => {
      db.getUserDoc(userID).then((response) => {
          console.log('PRINTING firstName from actions/index:\n', response.data()["firstName"])
          dispatch({ type: ActionTypes.FETCH_FIRST_NAME, payload: response.data()["firstName"] })
      }).catch((error) => {
          dispatch({ type: ActionTypes.ERROR_FIRST_NAME, error });
      })
  }
}

export function saveFirstName(userID, firstName) {
  return (dispatch) => {
      db.updateFirstName(userID, firstName).then((response) => {
          console.log('response in save last surveyed', response);
          dispatch({ type: ActionTypes.UPDATE_FIRST_NAME, payload: firstName });
      }).catch((error) => {
          dispatch({ type: ActionTypes.ERROR_FIRST_NAME, error });
      })
  }
}

