import { combineReducers } from "redux";
import listReducer from "./listReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  listReducer,
  modalReducer,
});

export default rootReducer;
