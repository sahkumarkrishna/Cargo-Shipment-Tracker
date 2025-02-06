import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import shipmentReducer from "./reducers/shipmentReducer";

const rootReducer = combineReducers({
  shipments: shipmentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

