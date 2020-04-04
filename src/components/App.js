import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialDataLoad } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    console.log(dispatch(handleInitialDataLoad()));
  }

  render() {
    return <div>Starter Code.</div>;
  }
}

export default connect(() => ({}))(App);
