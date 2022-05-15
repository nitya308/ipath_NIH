import { ActionTypes } from '../actions/index';
const initialState = {
    allTreatments: [],
    savedTreatments: []
}
const TreatmentsReducer = (state = initialState,  action = {}) => {
  switch (action.type) {
    case ActionTypes.SAVE_TREATMENT:
      return { ...state, savedTreatments: [...state.savedTreatments, action.payload ] };
    case ActionTypes.DELETE_SAVED_TREATMENT:
      let temp = [...state.savedTreatments];
      temp.splice(temp.indexOf(action.payload), 1);
      return { ...state, savedTreatments: temp}
    case ActionTypes.FETCH_SAVED_TREATMENTS:
      return { ...state, savedTreatments: action.payload };
    case ActionTypes.FETCH_TREATMENTS:
      return { ...state, allTreatments: action.payload };
    default:
      return state;
  }
};

export default TreatmentsReducer;