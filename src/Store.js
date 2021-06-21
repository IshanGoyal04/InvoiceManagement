import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  invoiceDetailsReducer,
  invoiceListReducer,
} from "../src/reducers/invoiceReducers";

const initialState = {};

const reducer = combineReducers({
  invoiceList: invoiceListReducer,
  invoiceDetails: invoiceDetailsReducer,
});

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);
//thunk is middleware for redux which allows us to run async operation inside action in redux

export default store;
