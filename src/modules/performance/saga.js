import { takeLatest } from "redux-saga/effects";
import { routineRequestApi } from "../../utils/routines";
import { Actions } from "./actions";
import { get } from "../../api";
function* getUsers(action) {
  yield routineRequestApi({
    routine: Actions.handle.load,
    *request() {
      const response = yield get();
      return response.data;
    }
  });
}

export function* performanceSaga() {
  yield takeLatest(Actions.handle.load.trigger, getUsers);
}
