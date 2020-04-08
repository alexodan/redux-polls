import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialDataLoad } from "../actions/shared";

import DashBoard from "./DashBoard";
import AddPoll from "./AddPoll";
import LoadingBar from "react-redux-loading";
import Leaderboard from "./Leaderboard";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialDataLoad());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {/* {this.props.loading ? null : <DashBoard />} */}
        {/* {this.props.loading ? null : <Leaderboard />} */}
        {this.props.loading ? null : <AddPoll />}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
