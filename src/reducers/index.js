import authUser from "./authUser";
import polls from "./polls";
import users from "./users";
import { combineReducers } from "redux";
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
  authUser,
  polls,
  users,
  loadingBar: loadingBarReducer
})
//reducers are functions that take initial state + actions and return new state
