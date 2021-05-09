import { ADD_VIDEO, REMOVE_VIDEO, SEND_VIDEO } from "../actions/";

const initialState = [];

const videoReducer = (state = initialState, action) => {
  console.log("actionReducer ===>", action.payload);

  switch (action.type) {
    default:
      return state;
  }
};

export default videoReducer;
