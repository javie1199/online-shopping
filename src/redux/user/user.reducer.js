const INIITAL_STATE = {
  currentUser: null,
};

// if the no state pass out to userReducer, initial state will be used.
const userReducer = (state = INIITAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      // reducer needs to return a new object so that react component will be rerendered
      return {
        ...state, // get other properties of current state
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
