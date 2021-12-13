import { createStore } from "redux";
import { applyMiddleware } from "redux";
import reducer from './redux/reducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

// const middleware = [

// ]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;