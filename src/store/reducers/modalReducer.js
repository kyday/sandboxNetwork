import { REGISTER_MODAL, SHOW_MODAL, DROP_MODAL } from "../actions/";

const initialState = {
  id: "",
  modals: false,
};

export default function modalReducer(state = initialState, action) {
  console.log("modal action Reducer ==>", action.payload);
  switch (action.type) {
    case SHOW_MODAL:
      return {
        // ...state,
        // modals: {
        //   ...state.modals,
        //   [action.payload.id]: {
        //     ...state.modals[action.payload.id],
        //     visible: true,
        //   },
        // },
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
