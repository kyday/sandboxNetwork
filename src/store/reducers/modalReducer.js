import { SHOW_MODAL, DROP_MODAL } from "../actions/";

const initialState = {
  modal: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modal: true,
      };
    case DROP_MODAL:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
}
