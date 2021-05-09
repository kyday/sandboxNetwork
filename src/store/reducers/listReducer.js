import {
  ADD_LIST,
  TOGGLE_LIST,
  REMOVE_LIST,
  TOGGLE_RESET,
  ADD_VIDEO,
  REMOVE_VIDEO,
} from "../actions/";

const initialState = [];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return state.concat({
        id: Date.now(),
        text: action.payload.text,
        done: false,
        video: [],
      });

    case ADD_VIDEO:
      return state.filter((list) =>
        list.id === action.payload.listId && list.video.length < 20
          ? list.video.push(action.payload)
          : list
      );

    case REMOVE_VIDEO:
      return state.filter((list) =>
        list.id === action.payload.listId && list.video.length > 0
          ? list.video.pop()
          : list
      );

    case TOGGLE_LIST:
      return state.map((list) =>
        list.id === action.payload.id ? { ...list, done: !list.done } : list
      );

    case TOGGLE_RESET:
      return state.map((list) =>
        action.payload.done === false ? { ...list, done: false } : list
      );

    case REMOVE_LIST:
      return state.filter((list) => list.id !== action.payload.id);

    default:
      return state;
  }
};

export default listReducer;
