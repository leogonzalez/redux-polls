import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import Leaderboard from "./LeaderBoard";
import AddPoll from "./AddPoll";
import Poll from "./Poll";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading ? null : (
              <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/polls/:id' component={Poll} />
                <Route path='/add' component={AddPoll} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null
  };
}

export default connect(mapStateToProps)(App);
