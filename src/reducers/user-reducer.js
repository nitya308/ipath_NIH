import { ActionTypes } from '../actions/index';
const initialState = {
    userEmail: '',
    userId: '',
    firstName: '',
    lastSurveyed: '',
}
const UserReducer = (state = initialState,  action = {}) => {
  // console.log('action', action);
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, userEmail: action.payload.email, userId: action.payload.id, firstName: action.payload.firstName, lastSurveyed: action.payload.lastSurveyed };
    case ActionTypes.LOGOUT_USER:
      return { ...state, userEmail: "", userId: ""};
    case ActionTypes.UPDATE_LAST_SURVEYED:
      console.log('in update switch', { ...state, lastSurveyed: action.payload });
      return { ...state, lastSurveyed: action.payload };
    case ActionTypes.FETCH_LAST_SURVEYED:
      console.log('in fetch switch', { ...state, lastSurveyed: action.payload });
      return { ...state, lastSurveyed: action.payload };
    default:
      return state;
  }
};

export default UserReducer;