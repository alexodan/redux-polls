import React, { Component } from "react";
import { handleCreatePoll } from "../actions/polls";
import { connect } from "react-redux";

export class AddPoll extends Component {
  state = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
  };

  addPoll = (e) => {
    e.preventDefault();
    // Redirect to /
    console.log("Poll to add:", this.state);
    const { dispatch } = this.props;
    const { question, a, b, c, d } = this.state;
    dispatch(
      handleCreatePoll({
        question,
        options: {
          a,
          b,
          c,
          d,
        },
      })
    );
  };

  changeQuestion = (e) => {
    const question = e.target.value;
    this.setState(() => ({
      question,
    }));
  };

  changeOption = (e) => {
    const { id, value } = e.target;
    this.setState(() => ({
      [id]: value,
    }));
  };

  isDisabled = () => {
    const { question, a, b, c, d } = this.state;
    return question === "" || a === "" || b === "" || c === "" || d === "";
  };

  render() {
    const { question, a, b, c, d } = this.state;
    return (
      <form className="add-form" onSubmit={this.addPoll}>
        <h3>What is your question?</h3>
        <input
          type="text"
          value={question}
          onChange={this.changeQuestion}
          name="question"
          className="input"
        />
        <h3>What are the options?</h3>
        <label className="label" htmlFor="a">
          A.
        </label>
        <input
          type="text"
          value={a}
          onChange={this.changeOption}
          name="a"
          className="input"
          id="a"
        />
        <label className="label" htmlFor="b">
          B.
        </label>
        <input
          type="text"
          value={b}
          onChange={this.changeOption}
          name="b"
          className="input"
          id="b"
        />
        <label className="label" htmlFor="c">
          C.
        </label>
        <input
          type="text"
          value={c}
          onChange={this.changeOption}
          name="c"
          className="input"
          id="c"
        />
        <label className="label" htmlFor="d">
          D.
        </label>
        <input
          type="text"
          value={d}
          onChange={this.changeOption}
          name="d"
          className="input"
          id="d"
        />
        <button className="btn" disabled={this.isDisabled()}>
          SUBMIT
        </button>
      </form>
    );
  }
}

export default connect(() => ({}))(AddPoll);
