import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware, combineEpics } from "redux-observable";

import pingpong, { epics as pingpong_epics } from "./modules/pingpong";

const env = process.env.NODE_ENV;

const reducer = combineReducers({ pingpong });

const epics = combineEpics(...pingpong_epics);

const epicMiddleware = createEpicMiddleware();

const middlewares = [epicMiddleware];

let middlewareConfig;

// 개발 모드일 때 크롬 개발자툴로 redux 확인 할 수 있도록 추가
if (env === "development") {
  middlewareConfig = composeWithDevTools(applyMiddleware(...middlewares));
} else {
  middlewareConfig = applyMiddleware(...middlewares);
}

const store = createStore(reducer, middlewareConfig);

epicMiddleware.run(epics);

export default store;
