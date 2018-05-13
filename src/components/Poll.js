import React, { Component } from "react";
import { connect } from "react-redux";
import { getPercentage } from "../utils/helpers";
import { handleAddAnswer} from '../actions/answers'

const getVoteKeys = () => ["aVotes", "bVotes", "cVotes", "dVotes"];

class Poll extends Component {

  handleAnswer = (answer) => {
    const {poll, authUser, dispatch} = this.props;
    this.answered = true;
    console.log('Add answer: ', answer);
    dispatch(handleAddAnswer({authUser, id: poll.id, answer}));
  }
  render() {
    if (this.props.poll === null) {
      return <p>This poll does not exist</p>;
    }

    const { poll, vote, authorAvatar } = this.props;
    const totalVotes = getVoteKeys().reduce(
      (total, key) => total + poll[key].length,
      0
    );

    return (
      <div className="poll-container">
        <h1 className="question">{poll.question}</h1>
        <div className="poll-author">
          BY <img src={authorAvatar} className="avatar" alt="avatar" />
        </div>
        <ul>
          {["aText", "bText", "cText", "dText"].map(key => {

            const count = poll[key[0]+'Votes'].length;
            return (
              <li
                onClick={ () => {
                  if (vote === null && !this.answered) {
                    this.handleAnswer(key[0])
                  }
                }}
                key={key}
                className={`option ${vote === key[0] ? "chosen" : ""}`}
              >
                {vote === null ? (
                  poll[key]
                ) : (
                  <div className="result">
                    <span>{poll[key]}</span>
                    <span>{getPercentage(count,totalVotes)}% ({count})</span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authUser, polls, users }, { match }) {
  const { id } = match.params;
  const poll = polls[id];

  if (!poll) {
    return {
      poll: null
    };
  }

  const vote = getVoteKeys().reduce((vote, key) => {
    // debugger
    if (vote !== null) {
      return vote[0];
    }

    return poll[key].includes(authUser) ? key[0] : vote;
  }, null);

  return {
    poll,
    vote,
    authUser,
    authorAvatar: users[poll.author].avatarURL
  };
}

export default connect(mapStateToProps)(Poll);
