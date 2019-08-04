import { combineReducers } from "redux";
import { performance } from "./modules/performance";
export const rootReducer = combineReducers({
  performance: performance
});
