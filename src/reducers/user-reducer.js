import { ActionTypes } from '../actions/index';
const initialState = {
    userEmail: '',
    userId: '',
}
const UserReducer = (state = initialState,  action = {}) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, userEmail: action.payload.email, userId: action.payload.id };
    case ActionTypes.LOGOUT_USER:
      return { ...state, userEmail: "", userId: ""};
    default:
      return state;
  }
};

export default UserReducer;