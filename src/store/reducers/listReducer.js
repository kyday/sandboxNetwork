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
  console.log("action.payload--->", action.payload);
  console.log("state--->", state);
  switch (action.type) {
    case ADD_LIST:
      return state.concat({
        id: Date.now(),
        text: action.payload.text,
        done: false,
        video: [],
      });

    case ADD_VIDEO:
      const test = state.filter((video) =>
        video.id === action.payload.listId ? video.video : video
      );
      test.video.push(action.payload);
      console.log("test==========>", test);

      return [...state];

    // const test= state.filter((video) => video.id === action.payload.listId)

    case REMOVE_VIDEO:
      return state.filter((video) =>
        video.id === action.payload.listId ? [(video.video = [])] : video
      );

    case TOGGLE_LIST:
      return state.map((list) =>
        list.id === action.payload.id ? { ...list, done: !list.done } : list
      );
    case TOGGLE_RESET:
      const newItems = [...state, action.payload];

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
