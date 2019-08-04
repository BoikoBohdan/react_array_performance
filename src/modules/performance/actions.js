import { createActions } from "redux-actions";
import * as R from "ramda";
import { routinesType, handleActions } from "../../utils/routines";

const defaultState = {
  performance: { comments: [], commentsIds: [] },
  noPerformance: { comments: [] }
};

export const Actions = createActions({
  HANDLE: { LOAD: routinesType, CHECK: undefined, checkPerformance: undefined }
});

const normalizeReducers = comments => {
  const commentsIds = [];
  const newObj = R.reduce(
    (acc, comment) => {
      commentsIds.push(comment.id);
      acc[comment.id] = comment;
      return acc;
    },
    {},
    comments
  );
  return { commentsIds, comments: newObj };
};

export const performance = handleActions(
  {
    [Actions.handle.load.success]: (draft, payload) => {
      draft.noPerformance.comments = payload;
      const { commentsIds, comments } = normalizeReducers(payload);
      draft.performance = { commentsIds, comments };
    },
    [Actions.handle.check]: (draft, payload) => {
      draft.noPerformance.comments[payload.id - 1].status = payload.status;
    },
    [Actions.handle.checkPerformance]: (draft, payload) => {
      draft.performance.comments[payload.id].status = payload.status;
    }
  },
  defaultState,
  {}
);
