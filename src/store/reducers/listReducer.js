import { ADD_LIST, TOGGLE_LIST, REMOVE_LIST } from "../actions/";

const initialState = [];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return state.concat({
        id: Date.now(),
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_LIST:
      return state.map((list) =>
        list.id === action.payload.id ? { ...list, done: !list.done } : list
      );
    case REMOVE_LIST:
      return state.filter((list) => list.id !== action.payload.id);
    default:
      return state;
  }
};

export default listReducer;
