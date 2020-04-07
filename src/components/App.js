import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialDataLoad } from '../actions/shared';

import DashBoard from './DashBoard';
import LoadingBar from 'react-redux-loading';
import Leaderboard from './Leaderboard';

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
				{this.props.loading ? null : <Leaderboard />}
			</div>
		);
	}
}

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null
});

export default connect(mapStateToProps)(App);
