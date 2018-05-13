import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddPoll } from "../actions/polls";

// reason why using component state -> does not make sense include this in redux
// reason why using a controlled compnent -> UI dependent on the component state

class AddPoll extends Component {
  state = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: ""
  };
  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  isDisabled = () => {
    return !Object.values(this.state).filter(a => !(a === "")).length === 5;
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/");
    return this.props.dispatch(handleAddPoll(this.state));
  };
  render() {
    const { question } = this.state;
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3 style={{ marginBottom: 5 }}>What is your question?</h3>
        <input
          value={question}
          onChange={this.handleInputChange}
          name="question"
          type="text"
          className="input"
        />

        <h3 style={{ marginBottom: 5 }}>What are the options?</h3>
        {["a", "b", "c", "d"].map(elem => {
          return (
            <div key={elem}>
              <label className="label" htmlFor={elem}>
                {elem.toUpperCase()}.
              </label>
              <input
                value={this.state[elem]}
                onChange={this.handleInputChange}
                name={elem}
                type="text"
                className="input"
                id={elem}
              />
            </div>
          );
        })}
        <button className="btn" type="submit" disabled={this.isDisabled()}>
          Submit
        </button>
      </form>
    );
  }
}

export default connect()(AddPoll);
