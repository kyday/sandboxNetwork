//list type
export const ADD_LIST = "ADD_LIST";
export const TOGGLE_LIST = "TOGGLE_LIST";
export const TOGGLE_RESET = "TOGGLE_RESET";
export const REMOVE_LIST = "REMOVE_LIST";

//video type
export const ADD_VIDEO = "ADD_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";

//modal type
export const SHOW_MODAL = "SHOW_MODAL";
export const DROP_MODAL = "DROP_MODAL";

//list action function
export const addList = (text) => {
  return {
    type: ADD_LIST,
    payload: {
      text,
    },
  };
};

export const removeList = (id) => {
  return {
    type: REMOVE_LIST,
    payload: {
      id,
    },
  };
};

export const toggleList = (id) => {
  return {
    type: TOGGLE_LIST,
    payload: {
      id,
    },
  };
};

export const toggleListReset = () => {
  return {
    type: TOGGLE_RESET,
    payload: {
      done: false,
    },
  };
};

//video action function
export const addVideo = (video) => {
  console.log("video===>", video);
  return {
    type: ADD_VIDEO,
    payload: {
      videoId: video.video_id,
      videoTitle: video.title,
      thumb: video.thumbnail,
    },
  };
};

export const removeVideo = (id) => {
  return {
    type: REMOVE_VIDEO,
    payload: {
      id,
    },
  };
};

//modal action function
export const showModal = (item) => ({ type: SHOW_MODAL, payload: item });
export const dropModal = () => ({ type: DROP_MODAL });
