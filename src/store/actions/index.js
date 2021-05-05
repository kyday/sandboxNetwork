//list type
export const ADD_LIST = "ADD_LIST";
export const TOGGLE_LIST = "TOGGLE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

//modal type
export const SHOW_MODAL = "SHOW_MODAL";
export const DROP_MODAL = "DROP_MODAL";

//list action function
export const addList = (id, text) => {
  return {
    type: ADD_LIST,
    payload: {
      id,
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

//modal action function
export const showModal = (item) => ({ type: SHOW_MODAL, payload: item });
export const dropModal = () => ({ type: DROP_MODAL });
