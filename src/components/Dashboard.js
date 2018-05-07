import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {
    showAnswered: false
  };
  showUnanswered = () => {
    this.setState({
      showAnswered: false
    });
  };

  showAnswered = () => {
    this.setState({
      showAnswered: true
    });
  };

  render() {
    const { showAnswered } = this.state;
    const { answered, unanswered } = this.props;
    const list = showAnswered === true ? answered : unanswered;
    return (
      <div>
        <div className="dashboard-toggle">
          <button
            style={{
              textDecoration: showAnswered === false ? "underline" : null
            }}
            onClick={this.showUnanswered}
          >
            Unanswered
          </button>
          <span>|</span>
          <button
            style={{
              textDecoration: showAnswered === true ? "underline" : null
            }}
            onClick={this.showAnswered}
          >
            Answered
          </button>
        </div>
        <div>
          <ul className='dashboard-list'>
            {list.map(poll => {
              return <li key={poll.id}>{poll.question}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authUser, polls, users }) {
  const answers = users[authUser].answers;
  const answered = answers
    .map(id => {
      return polls[id];
    })
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
  const unanswered = Object.keys(polls)
    .filter(id => {
      return !answers.includes(id);
    })
    .map(id => {
      return polls[id];
    })
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
  return {
    answered,
    unanswered
  };
}

export default connect(mapStateToProps)(Dashboard);
