import { all } from "redux-saga/effects";
import { performanceSaga } from "./modules/performance";

export function* rootSaga() {
  yield all([performanceSaga()]);
  // another side-effect here
}
