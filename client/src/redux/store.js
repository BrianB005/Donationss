import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { switchPageReducer } from "./reducers/activePageReducers";
import { emailsReducer } from "./reducers/emailReducers";
const initialState = {};

const reducers = combineReducers({
  page: switchPageReducer,
  sendMail: emailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
