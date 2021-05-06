import { combineReducers } from "redux";
import listReducer from "./listReducer";
import modalReducer from "./modalReducer";
import videoReducer from "./videoReducer";

const rootReducer = combineReducers({
  listReducer,
  modalReducer,
  videoReducer,
});

export default rootReducer;
