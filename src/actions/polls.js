import { savePoll } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const LOAD_POLLS = 'LOAD_POLLS';
export const SAVE_POLL = 'SAVE_POLL';

function saveNewPoll(poll) {
	return {
		type: SAVE_POLL,
		poll
	};
}

export function loadPolls(polls) {
	return {
		type: LOAD_POLLS,
		polls
	};
}

export function handleCreatePoll(poll) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		dispatch(showLoading());
		return savePoll({
			...poll,
			author: authedUser
		})
			.then((poll) => dispatch(saveNewPoll(poll)))
			.then(() => dispatch(hideLoading()));
	};
}
