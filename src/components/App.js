import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialDataLoad } from '../actions/shared';

import DashBoard from './DashBoard';
import AddPoll from './AddPoll';
import LoadingBar from 'react-redux-loading';
import Leaderboard from './Leaderboard';
import Poll from './Poll';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(handleInitialDataLoad());
	}

	render() {
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					<div className="container">
						<Nav />
						{this.props.loading ? null : (
							<div>
								<Route path="/" exact component={DashBoard} />
								<Route path="/leaderboard" exact component={Leaderboard} />
								<Route path="/polls/:id" exact component={Poll} />
								<Route path="/add" exact component={AddPoll} />
							</div>
						)}
					</div>
				</Fragment>
			</Router>
		);
	}
}

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null
});

export default connect(mapStateToProps)(App);
