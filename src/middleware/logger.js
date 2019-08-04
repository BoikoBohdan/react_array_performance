export const logger = store => next => action => {
  console.group(action.type);
  console.log("prev state", store.getState());
  console.log(action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};
