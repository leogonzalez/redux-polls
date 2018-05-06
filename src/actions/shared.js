import { getInitialData } from "../utils/api";
import { receivePolls } from "../actions/polls";
import { receiveUsers } from "../actions/users";
import { setAuthUser } from "../actions/authUser";

const AUTHED_ID = "sarah_edo";

// this is an async action creator. it should return a function that takes a dispatch argument and dipatches a plain actioncreator
export function handleInitialData() {
  return dispatch => {
    return getInitialData()
      .then(({ users, polls }) => {
        dispatch(receivePolls(polls));
        dispatch(receiveUsers(users));
        dispatch(setAuthUser(AUTHED_ID));
      })
      .catch(() => {
        alert("Error on initial data");
      });
  };
}
