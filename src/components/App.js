import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData())
  }

  render() {
    return (<div>Starter Code.</div>);
  }
}

// function mapStateToProps(state) {
//   return {
//     ...state
//   };
// }

export default connect()(App);
