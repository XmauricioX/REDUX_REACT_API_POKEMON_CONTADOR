import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers/rootReducer";
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from "redux-thunk";

const store = createStore(rootReducers, composeWithDevTools(
  applyMiddleware(thunk)
)) // aca es donde se ponen los middlewares

export default store;