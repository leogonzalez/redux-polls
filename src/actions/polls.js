import { savePoll } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ADD_POLL = "ADD_POLL";

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  };
}

export function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll
  };
}

// since we are dealing with an API, we need actioncreator+ async ac
//getState is the second argument that we get with redux thunk

export function handleAddPoll(poll) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(showLoading());
    return savePoll({
      ...poll,
      author: authUser
    })
      .then(poll => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()));
  };
}
