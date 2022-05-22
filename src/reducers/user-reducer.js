import { ActionTypes } from '../actions/index';
const initialState = {
    userEmail: '',
    userId: '',
}
const UserReducer = (state = initialState,  action = {}) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      console.log(action.payload);
      return { ...state, userEmail: action.payload.email, userId: action.payload.id };
    case ActionTypes.LOGOUT_USER:
      console.log('logged out');
      return { ...state, userEmail: "", userId: ""};
    default:
      return state;
  }
};

export default UserReducer;