import { ActionTypes } from '../actions/index';

const initialState = {
    treatments: []
}
const TreatmentsReducer = (state = initialState,  action = {}) => {
  switch (action.type) {
    case ActionTypes.SAVE_TREATMENT:
        const tempSet = new Set(state.treatments)
        let newTreatments = [...state.treatments];
        if(tempSet.has(action.payload)){
            tempSet.delete(action.payload);
            newTreatments = Array.from(tempSet);
        } else {
            newTreatments.push(action.payload);
        }
      return { ...state, treatments: newTreatments };
    default:
      return state;
  }
};

export default TreatmentsReducer;