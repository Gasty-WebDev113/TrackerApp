/* eslint-disable require-jsdoc */
export function setpReducer(state = {}, action) {
  switch (action.type) {
    case 'INITIAL_STEPS':
      return action.payload;

    default:
      return state;
  }
}
