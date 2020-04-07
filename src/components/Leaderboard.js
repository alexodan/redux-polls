import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderCard from './LeaderCard';

export class Leaderboard extends Component {
	render() {
		const { users } = this.props;
		return (
			<ul>
				{users.map(({ id, name, img, polls, answers }) => (
					<LeaderCard key={id} name={name} img={img} polls={polls} answers={answers} />
				))}
			</ul>
		);
	}
}

function mapStateToProps({ users: usersState }) {
	const users = Object.values(usersState).map((u) => ({
		id: u.id,
		name: u.name,
		img: u.avatarURL,
		polls: u.polls.length,
		answers: u.answers.length
	}));
	return {
		users: users.sort((a, b) => b.polls + b.answers - (a.polls + a.answers))
	};
}

export default connect(mapStateToProps)(Leaderboard);
