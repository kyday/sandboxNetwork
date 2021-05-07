import { ADD_VIDEO, REMOVE_VIDEO, SEND_VIDEO } from "../actions/";

const initialState = [];

const videoReducer = (state = initialState, action) => {
  console.log("actionReducer ===>", action.payload);
  switch (action.type) {
    case ADD_VIDEO:
      state.shift();
      return [...state, action.payload];
    case SEND_VIDEO:
      return state.map((list) =>
        list.id === action.payload.video_id
          ? { ...list, done: !list.done }
          : list
      );
    case REMOVE_VIDEO:
      return state.filter((list) => list.id !== action.payload.id);

    default:
      return state;
  }
};

export default videoReducer;
