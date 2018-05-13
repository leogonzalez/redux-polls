import { savePollAnswer } from "../utils/api";
import { showLoading, hideLoading} from 'react-redux-loading'

export const ADD_ANSWER = "ADD_ANSWER";

export function addAnswer({authUser, id, answer}) {
  return {
    type: ADD_ANSWER,
    authUser,
    id,
    answer
  };
}

//this one is a thunk, need to return from api
export function handleAddAnswer (answerData) {
  return (dispatch) => {
    dispatch(showLoading())
    const answerAPI ={
      authedUser: answerData.authUser,
      id: answerData.id,
      answer: answerData.answer
    }
    return savePollAnswer(answerAPI)
      .then(() => dispatch(addAnswer(answerData)))
      .then(() => dispatch(hideLoading()))
  }
}
