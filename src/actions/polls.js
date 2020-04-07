import { savePoll } from '../utils/api';

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
	return (dispatch) => {
		dispatch(saveNewPoll(poll));
		savePoll(poll);
		// .catch(err => {
		//   console.error(err);
		//   dispatch(removePoll());
		// })
	};
}
