const initialState = {
  steps: 0,
};

/** Step state manager */
export function setpReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_INITIAL_STEPS':
      // eslint-disable-next-line no-return-assign
      return {...state, steps: action.steps};
    default:
      return state;
  }
}
