import constants from '../common/constants';
import authReducer from './authReducer';
import deepFreeze from 'deep-freeze';

describe('auth reducer', () => {
  it('should handle initial state', () => {
    expect(
      authReducer(undefined, { })
    ).toEqual({
      isSignedIn: null,
      userId: null
    });
  });

  it('should handle SIGN_IN', () => {
    const stateBefore = {
      isSignedIn: null,
      userId: null
    };
    const action = {
      type: constants.ACTIONS.SIGN_IN,
      payload: 'Raz'
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      authReducer(stateBefore, action)
    ).toEqual({
      isSignedIn: true,
      userId: 'Raz'
    });
  });

  it('should handle SIGN_OUT', () => {
    const stateBefore = {
      isSignedIn: true,
      userId: 'raz'
    };
    const action = {
      type: constants.ACTIONS.SIGN_OUT
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      authReducer(stateBefore, action)
    ).toEqual({
      isSignedIn: false,
      userId: null
    });
  });
})