import React from "react";
import { connect } from "react-redux";

function Leaderboard({ users }) {
  console.log(users);
  return (
    <ul>
      {users.map(user => {
        return (
          <li className="user" key={user.id}>
            <img src={user.avatarURL} alt='Avatar' />
            <div>
              <h1>{user.name}</h1>
              <p>{user.answers} answers</p>
              <p>{user.polls} polls</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// from database we get an object - must change this to an array of objects so we can map to React
// pretty good strategy: formatting of data inside mapStateToProps
function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .map(id => {
        const { name, avatarURL, polls, answers } = users[id];
        return {
          id,
          name,
          avatarURL,
          polls: polls.length,
          answers: answers.length
        };
      })
      .sort((a, b) => b.polls + b.answers > a.polls + a.answers)
  };
}

export default connect(mapStateToProps)(Leaderboard);
