import constants from '../common/constants';

export const signIn = (id) => {
  return { type: constants.ACTIONS.SIGN_IN, payload: id };
};

export const signOut = () => {
  return { type: constants.ACTIONS.SIGN_OUT };
};