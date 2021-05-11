import { SHOW_MODAL, DROP_MODAL } from "../actions/";

const initialState = {
  modals: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        id: action.payload.id,
        modals: true,
      };
    case DROP_MODAL:
      return { ...state, modals: false };
    default:
      return state;
  }
}
