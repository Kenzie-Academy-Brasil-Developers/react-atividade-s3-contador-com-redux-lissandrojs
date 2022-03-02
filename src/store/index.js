import { combineReducers, createStore } from "redux";
import counterReducer from "./Modules/counter/reducer";
const reducers = combineReducers({value: counterReducer})
const store = createStore(reducers)
export default store