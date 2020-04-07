import React from 'react';
import { connect } from 'react-redux';

class DashBoard extends React.Component {
	state = {
		showAnswered: false
	};

	setAnswered = () => {
		this.setState(() => ({
			showAnswered: true
		}));
	};

	setUnanswered = () => {
		this.setState(() => ({
			showAnswered: false
		}));
	};

	render() {
		const { answeredPolls, unansweredPolls } = this.props;
		const { showAnswered } = this.state;
		const list = showAnswered ? answeredPolls : unansweredPolls;

		return (
			<div>
				<div className="dashboard-toggle">
					<button
						style={{ textDecoration: showAnswered ? 'none' : 'underline' }}
						onClick={this.setUnanswered}
					>
						Unanswered
					</button>
					<span>|</span>
					<button style={{ textDecoration: !showAnswered ? 'none' : 'underline' }} onClick={this.setAnswered}>
						Answered
					</button>
				</div>
				<div className="dashboard-list">
					<ul>{list.map((poll) => <li key={poll.id}>{poll.question}</li>)}</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ authedUser, polls, users }) => {
	const answers = users[authedUser].answers;
	const answeredPolls = answers.map((id) => polls[id]);
	const unansweredPolls = Object.values(polls).filter((poll) => !answers.includes(poll.id));
	return {
		answeredPolls,
		unansweredPolls
	};
};

export default connect(mapStateToProps)(DashBoard);
