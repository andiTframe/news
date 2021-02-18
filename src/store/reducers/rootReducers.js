import { combineReducers } from "redux";
import metaReducer from "./metaReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  meta: metaReducer,
  post: postReducer,
});
export default rootReducer;
