import { produce } from "immer";
import { put } from "redux-saga/effects";
import _ from "lodash";

const createRoutine = routines => {
  const routinesActionMap = {};
  _.forEach(routines, routine => (routinesActionMap[routine] = args => args));
  return routinesActionMap;
};

const routinesType = createRoutine([
  "TRIGGER",
  "REQUEST",
  "SUCCESS",
  "FAILURE",
  "FULLFILL"
]);

const routinesReducers = {
  trigger: path => draft => {
    _.set(draft, `${path}`, {});
  },
  request: path => draft => {
    _.set(draft, `${path}.loading`, true);
  },
  success: path => draft => {
    _.set(draft, `${path}.loading`, false);
  },
  failure: path => draft => {
    _.set(draft, `${path}.failure`, true);
  },
  fullfill: path => draft => {
    _.set(draft, `${path}.loading`, false);
  }
};

const handleActions = (actionsMap, defaultState, routines = []) => {
  let routinesMap = [];
  _.forEach(routines, routine => {
    _.forEach(routine, (action, path) => {
      routinesMap[action.trigger] = routinesReducers.trigger(path);
      routinesMap[action.request] = routinesReducers.request(path);
      routinesMap[action.success] = routinesReducers.success(path);
      routinesMap[action.failure] = routinesReducers.failure(path);
    });
  });

  return (state = defaultState, { type, payload }) => {
    return produce(state, draft => {
      const routineReducer = routinesMap[type];
      const reducer = actionsMap[type];
      if (routineReducer) {
        routineReducer(draft, payload);
      }
      if (reducer) {
        reducer(draft, payload);
      }
    });
  };
};

function* routineRequestApi({ routine, request, afterSuccess, afterError }) {
  try {
    yield put(routine.request());
    const response = yield* request();
    yield put(routine.success(response));
    if (afterSuccess) {
      afterSuccess();
    }
  } catch (err) {
    yield put(routine.failure(err));
    if (afterError) afterError(err);
  }
}

export { handleActions, routinesType, routineRequestApi };
