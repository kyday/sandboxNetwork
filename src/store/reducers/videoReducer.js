import { ADD_VIDEO, REMOVE_VIDEO, SEND_VIDEO } from "../actions/";

const initialState = [];

const videoReducer = (state = initialState, action) => {
  console.log("actionReducer ===>", action.payload);

  switch (action.type) {
    case ADD_VIDEO:
      return action.payload.done === true ? [...state, action.payload] : state;

    case REMOVE_VIDEO:
      return state.filter((list) => list.id !== action.payload.id);
    default:
      return state;
  }
};

export default videoReducer;
