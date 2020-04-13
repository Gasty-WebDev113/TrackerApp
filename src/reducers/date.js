const now = new Date()

const initialState = {
  date: new Date(now.getFullYear(), now.getMonth(), now.getDay())
};

/** Step state manager */
export function dateReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATE':
      // eslint-disable-next-line no-return-assign
      return {...state, date: action.date};

    default:
      return state;
  }
}
