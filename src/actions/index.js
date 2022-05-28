import * as db from '../services/datastore';
export const ActionTypes = {
    SAVE_TREATMENT: 'SAVE_TREATMENT',
    DELETE_SAVED_TREATMENT: 'DELETE_SAVED_TREATMENT',
    FETCH_SAVED_TREATMENTS: 'FETCH_SAVED_TREATMENTS',
    FETCH_TREATMENTS: 'FETCH_TREATMENTS',
    ERROR_TREATMENTS: 'ERROR_TREATMENTS',
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
};


export function saveTreatment(userID, treatID) {
    // return {
    //     type: ActionTypes.SAVE_TREATMENT,
    //     payload: treatment,
    // }
    return (dispatch) => {
        db.updateFavTreatment(userID, treatID).then((response) => {
            dispatch({ type: ActionTypes.SAVE_TREATMENT, payload: treatID });
        }).catch((error) => {
            dispatch({ type: ActionTypes.ERROR_TREATMENTS, error });
        })
    }
}

export function deleteSavedTreatment(userID, treatID){
    return(dispatch) => {
        db.deleteFavTreatment(userID, treatID);
        // .then((response) => {
        //     dispatch({ type: ActionTypes.DELETE_SAVED_TREATMENT, payload: treatID })
        // }).catch((error) => {
        //     dispatch({ type: ActionTypes.ERROR_TREATMENTS, error})
        // })
        dispatch({ type: ActionTypes.DELETE_SAVED_TREATMENT, payload: treatID })

    }
}
export function fetchTreatments() {
    return (dispatch) => {
        db.getTreatments().then((response) => {
            const list = [];
            response.forEach((doc) => {
                list.push({id: doc.id, data: doc.data()});
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

export function loginUser({ email, id } ) {
    return (dispatch) => {
        dispatch({ type: ActionTypes.LOGIN_USER, payload: {email : email, id: id} });
    }
}

export function logoutUser() {
    return (dispatch) => {
        dispatch({ type: ActionTypes.LOGOUT_USER });
    }
}