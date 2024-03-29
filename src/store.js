import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "./middleware/logger";
import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);
