import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import Leaderboard from "./LeaderBoard";
import AddPoll from "./AddPoll";
import Poll from "./Poll";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading ? null : (
          <div>
            <Poll match={{params: {id: 'vthrdm985a262al8qx3do'}}}/>

          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null
  };
}

export default connect(mapStateToProps)(App);


// <Leaderboard />
// <Dashboard />
