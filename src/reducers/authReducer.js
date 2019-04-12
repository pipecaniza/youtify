import constants from '../common/constants';

const defaultState = {
  isSignedIn: null,
  userId: null
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.ACTIONS.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case constants.ACTIONS.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};