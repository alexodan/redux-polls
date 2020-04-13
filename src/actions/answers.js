import { savePollAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const ANSWER_POLL = 'ANSWER_POLL';

function answerPoll({ authedUser, id, answer }) {
	return {
		type: ANSWER_POLL,
		authedUser,
		id,
		answer
	};
}

export function handleAnswerPoll(answerData) {
	return (dispatch) => {
		dispatch(showLoading());
		return savePollAnswer(answerData)
			.then(() => dispatch(answerPoll(answerData)))
			.then(() => dispatch(hideLoading()));
	};
}
