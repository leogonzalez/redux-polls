import authUser from "./authUser";
import polls from "./polls";
import users from "./users";
import { combineReducers } from "redux";

export default combineReducers({
  authUser,
  polls,
  users
})
//reducers are functions that take initial state + actions and return new state
