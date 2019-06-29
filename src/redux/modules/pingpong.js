import { delay, map } from "rxjs/operators";

/*
 * action types
 */

export const UPDATE_COUNTER = "UPDATE_COUNTER";
export const UPDATE_COMPLETE = "UPDATE_COMPLETE";

/*
 * action creators
 */

function updateCounter(counterStep) {
  return { type: UPDATE_COUNTER, payload: counterStep };
}

/*
 * reducer
 */

const initialState = 0;

const reducer = (state = initialState, action) => {
  console.log("reducer: ", action);
  switch (action.type) {
    case UPDATE_COUNTER:
      return state;

    case UPDATE_COMPLETE:
      return state + action.payload;

    default:
      return state;
  }
};

/*
 * epic
 */

const counterEpic = action$ => {
  return action$.ofType(UPDATE_COUNTER).pipe(
    delay(1000), // Asynchronously wait 1000ms then continue
    map(action => {
      console.log("counterEpic: ", action);
      return {
        type: UPDATE_COMPLETE,
        payload: action.payload
      };
    })
  );
};

const counterEpic2 = action$ => {
  return action$.ofType(UPDATE_COUNTER).pipe(
    delay(1000), // Asynchronously wait 1000ms then continue
    map(action => {
      console.log("counterEpic2: ", action);
      return {
        type: UPDATE_COMPLETE,
        payload: action.payload
      };
    })
  );
};

const actionCreators = {
  updateCounter
};

const epics = {
  counterEpic,
  counterEpic2
};

export { actionCreators };
export { epics };
export default reducer;
