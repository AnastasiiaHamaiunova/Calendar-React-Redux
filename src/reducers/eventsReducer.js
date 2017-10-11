const initialState = [
  {},
];
export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign({}, state, {
        events: action.event,
      });

    default: return state;
  }
};
