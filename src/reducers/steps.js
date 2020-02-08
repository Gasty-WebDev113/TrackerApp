/* eslint-disable require-jsdoc */

import {REHYDRATE} from 'redux-persist';

const initialState = {
  steps: 0,
  auth: false,
};

export function setpReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_INITIAL_STEPS':
      // eslint-disable-next-line no-return-assign
      return {...state, steps: action.steps}

    default:
      return state;
  }
}
