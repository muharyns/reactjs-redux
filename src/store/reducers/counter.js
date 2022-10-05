const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state, // { counter: 0 }
        counter: action.payload // override
      };
    case "DECREASE":
      return {
        ...state, // { counter: 0 }
        counter: action.payload // override
      };
    default:
      return state;
  }
};
