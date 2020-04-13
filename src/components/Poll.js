import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPercentage } from '../utils/helpers';
import { handleAnswerPoll } from '../actions/answers';

function getVoteKeys() {
	return [ 'aVotes', 'bVotes', 'cVotes', 'dVotes' ];
}

export class Poll extends Component {
	selectOption(e) {
		const option = e.target.id;
		console.log(option);
	}

	chooseOption = (answer) => {
		const { authedUser, poll, dispatch } = this.props;
		this.answered = true;
		dispatch(handleAnswerPoll({ authedUser, id: poll.id, answer }));
	};

	render() {
		if (this.props.poll === null) {
			return <p>This poll does not exists!</p>;
		}
		const { poll, author, authorAvatar, vote } = this.props;
		const total = getVoteKeys().reduce((total, key) => total + poll[key].length, 0);
		return (
			<div className="poll-container">
				<h1 className="question">{poll.question}</h1>
				<div className="poll-author">
					<span>BY</span>
					<img src={authorAvatar} alt={author} />
				</div>
				<ul>
					{[ 'aText', 'bText', 'cText', 'dText' ].map((key) => {
						const count = poll[key[0] + 'Votes'].length;
						return (
							<li
								key={key}
								className={`option ${vote === key[0] ? 'chosen' : ''}`}
								onClick={() => {
									if (vote === null && !this.answered) {
										this.chooseOption(key[0]);
									}
								}}
							>
								{vote === null ? (
									poll[key]
								) : (
									<div className="result">
										<span>{poll[key]}</span>
										<span>
											{getPercentage(count, total)}% ({count})
										</span>
									</div>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, polls, users }, { match }) {
	const poll = polls[match.params.id];
	if (!poll) {
		return {
			poll: null
		};
	}
	const vote = getVoteKeys().reduce((prev, key) => {
		if (poll[key].includes(authedUser)) {
			prev = key;
		}
		return prev !== null ? prev[0] : prev;
	}, null);
	const { name, avatarURL } = users[poll.author];
	return {
		poll: poll,
		author: name,
		authorAvatar: avatarURL,
		authedUser: authedUser,
		vote: vote
	};
}

export default connect(mapStateToProps)(Poll);
