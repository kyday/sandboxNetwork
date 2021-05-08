import GetAxios from "../../api/GetAxios";

//list type
export const ADD_LIST = "ADD_LIST";
export const TOGGLE_LIST = "TOGGLE_LIST";
export const TOGGLE_RESET = "TOGGLE_RESET";
export const REMOVE_LIST = "REMOVE_LIST";

//video type
export const ADD_VIDEO = "ADD_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";

export const SEND_VIDEO = "SEND_VIDEO";

//modal type
export const REGISTER_MODAL = "REGISTER_MODAL";
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
export const addVideo = (video, done) => {
  return {
    type: ADD_VIDEO,
    payload: {
      id: video[0].video_id,
      title: video[0].title,
      thumbnail: video[0].thumbnail,
      done,
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

export const sendVideo = (id) => {
  return {
    type: SEND_VIDEO,
    payload: {
      id,
    },
  };
};

//modal action function

export const registerModal = (id) => {
  return {
    type: REGISTER_MODAL,
    payload: { id },
  };
};

export const showModal = (id) => {
  console.log("showmodal==>", id);
  return {
    type: SHOW_MODAL,
    payload: {
      id,
    },
  };
};

export const dropModal = (id) => {
  return {
    type: DROP_MODAL,
    payload: {
      id,
    },
  };
};

export const dataset = (id, done) => async (dispatch) => {
  try {
    console.log("done==>", !done);
    const res = await GetAxios.getData();
    const filterData = res.data.filter((item) => item.video_id === id);
    if (!done) dispatch(addVideo(filterData, !done));
  } catch (err) {
    console.log(err);
  }
};
