import { ADD_VIDEO, REMOVE_VIDEO } from "../actions/";

const initialState = [];

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIDEO:
      state.shift();
      return state.concat({
        id: action.payload.videoId,
        title: action.payload.videoTitle,
        thumb: action.payload.thumb,
      });
    case REMOVE_VIDEO:
      return state.filter((list) =>
        list.id !== action.payload.id
          ? null
          : state.concat({
              id: action.payload.videoId,
              title: action.payload.videoTitle,
              thumb: action.payload.thumb,
            })
      );
    default:
      return state;
  }
};

export default videoReducer;
